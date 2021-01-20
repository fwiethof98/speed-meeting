from django.shortcuts import redirect
from django.contrib.auth import login, logout

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User
from .forms import UserForm, UserProfileForm, LoginForm
from ..serializers import FriendSerializer, HobbySerializer, FeedbackSerializer
from ..models import Feedback, Hobby, UserProfile

#### AUTHENTICATION ####
# login, register, logout


@api_view(['POST'])
def user_login_api_view(request):
    print(request.data)
    form = LoginForm(request.data)
    if form.is_valid():
        login(request, User.objects.get(username=request.data['username']))
        return Response({'message': 'Login successful'}, status=200)
    else:
        return Response({'message': 'Wrong username or password'}, status=400)


@api_view(['POST'])
def user_register_api_view(request):  # WORKS
    request.data["username"] = request.data["email"]
    form = UserForm(request.data)
    print(form.errors)
    if form.is_valid():
        user = form.save()
        form = UserProfileForm(request.data)
        print(form.is_valid())
        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = user
            profile.save()
            user.set_password(request.data['password'])
            user.save()
            login(request, user)
            return Response({'message': 'User created and logged in'}, status=200)
    return Response({'message': 'Invalid registration data'}, status=400)


#### MATCHING ####
# search


@api_view(['GET'])
def user_is_authenticated_view(request):
    if request.user.is_authenticated:
        return Response({'username': request.user.username}, status=200)
    return Response({'message': 'No'}, status=400)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_assign_preference_api_view(request):
    data = request.data
    if "language" in data.keys():
        request.user.userprofile.pref_language = data["language"]
    if "studies" in data.keys():
        request.user.userprofile.pref_studies = data["studies"]
    request.user.userprofile.hobbies.set(Hobby.objects.none())
    for hobby in data["hobbies"]:
        request.user.userprofile.hobbies.add(
            Hobby.objects.get(name=hobby['name']))
    request.user.userprofile.save()
    return Response({'message': 'Preferences updated'}, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def friend_feedback_api_view(request):
    friend = UserProfile.objects.filter(room=request.user.userprofile.room).exclude(
        id=request.user.id).first()
    feedback = Feedback.objects.filter(
        user_a=request.user.userprofile).filter(user_b=friend)
    print(feedback)
    # if feedback.count() == 0:
    #     feedback = Feedback.objects.filter(
    #         user_a=friend).filter(user_b=request.user.userprofile)
    # if feedback.count != 0:
    #     if int(request.data['content']) < int(feedback.content):
    #         feedback.content = request.data['content']
    # else:
    #     feedback = Feedback(user_a=request.user.userprofile,
    #                         user_b=friend, content=request.data["content"])
    # feedback.save()
    # return Response(FeedbackSerializer(feedback).data, status=200)
    return Response({}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_hobby_api_view(request):
    action = request.GET.get('action')
    if action == 'all':
        serializer = HobbySerializer(Hobby.objects.all(), many=True)
        return Response(serializer.data, status=200)
    elif action == 'my':
        serializer = HobbySerializer(
            request.user.userprofile.preference.hobbies, many=True)
        return Response(serializer.data, status=200)
    return Response({'message': 'Please provide filter criteria'}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_match_api_view(request):
    qs = UserProfile.objects.filter(
        room=request.user.userprofile.room).exclude(user=request.user)
    serializer = FriendSerializer(qs, many=True)
    return Response(serializer.data, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_hobby_api_view(request):
    serializer = HobbySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response({'message': 'Wrong hobby data provided'}, status=400)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def delete_hobby_api_view(request):
    name = request.data['name']
    Hobby.objects.get(name=request.data['name']).delete()
    return Response({'message': f'Hobby {name} was deleted'}, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_participate_api_view(request):
    participate = request.data['participate']
    request.user.userprofile.participation = participate
    return Response({'message': f'User participation was set to {participate}'}, status=200)
