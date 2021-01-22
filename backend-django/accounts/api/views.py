from django.shortcuts import redirect
from django.contrib.auth import login, logout

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User
from .forms import UserForm, UserProfileForm, LoginForm
from ..serializers import FriendSerializer, HobbySerializer, FeedbackSerializer
from ..models import Feedback, Hobby, UserProfile

import os

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
        return Response({'username': request.user.username, 'first_name': request.user.userprofile.first_name, 'last_name': request.user.userprofile.last_name}, status=200)
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
    print(request.data)
    friend = UserProfile.objects.filter(room=request.user.userprofile.room).exclude(
        user=request.user).first()
    feedback = Feedback.objects.filter(
        user_a=request.user.userprofile).filter(user_b=friend)
    if feedback.count() == 0:
        feedback = Feedback.objects.filter(
            user_a=friend).filter(user_b=request.user.userprofile)
    if feedback.count() != 0:
        feedback = feedback.first()
        if int(request.data['content']) < int(getattr(feedback, 'content')):
            feedback.content = request.data['content']
    else:
        feedback = Feedback(user_a=request.user.userprofile,
                            user_b=friend, content=request.data["content"])
    feedback.save()
    request.user.userprofile.friends.add(friend)
    request.user.userprofile.save()
    return Response(FeedbackSerializer(feedback).data, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def set_socket_api_view(request):
    socket = request.data['socketID']
    request.user.userprofile.socket = socket
    request.user.userprofile.save()
    username = request.user.username
    return Response({'message': f'Socket for {username} was set to {socket}'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_friends_api_view(request):
    result = {
        "cat_1": [],
        "cat_2": [],
        "cat_3": []
    }
    qs_1 = Feedback.objects.filter(user_a=request.user.userprofile)
    qs_2 = Feedback.objects.filter(user_b=request.user.userprofile)
    for feedback in qs_1:
        print(feedback)
        content = feedback.content
        result["cat_" + content].append(feedback.user_b)
    for feedback in qs_2:
        content = feedback.content
        result["cat_" + content].append(feedback.user_a)

    for key in result:
        result[key] = FriendSerializer(result[key], many=True).data
    return Response(result, status=200)


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


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_participate_api_view(request):
    action = request.GET.get("action")
    if action != None:
        request.user.userprofile.participation = False
        request.user.userprofile.save()
        return Response({'message': f'User participation was reset'}, status=200)
    participate = request.data['participate']
    request.user.userprofile.participation = participate
    request.user.userprofile.save()
    return Response({'message': f'User participation was set to {participate}'}, status=200)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_import_api_view(request):
    csv_path = os.path.join(os.path.dirname(__file__), 'data.csv')
    with open(csv_path, 'r') as f:
        field_names = f.readline().replace("\n", "").split(",")
        for line in f:
            user_data = line.split(",")
            new_user = {}
            for index, field in enumerate(user_data):
                if index != 0:
                    new_user[field_names[index]] = field
            new_user["username"] = new_user["email"]
            form = UserForm(new_user)
            print(new_user)
            if form.is_valid():
                user = form.save()
                form = UserProfileForm(new_user)
                if form.is_valid():
                    profile = form.save(commit=False)
                    profile.user = user
                    profile.save()
                    user.set_password(new_user['password'])
                    user.save()
                    print("Another user created")
    return Response({'message': 'All users were imported'}, status=200)
