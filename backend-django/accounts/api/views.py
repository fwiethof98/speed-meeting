from django.contrib.auth import login, logout

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User
from .forms import UserForm, UserProfileForm, LoginForm
from ..serializers import FriendSerializer, HobbySerializer, PreferenceSerializer
from ..models import Hobby, Preference, UserProfile

#### AUTHENTICATION ####
# login, register, logout


@api_view(['POST'])
def user_login_api_view(request):
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


@ api_view(['POST'])
@ permission_classes([IsAuthenticated])
def user_logout_api_view(request):
    logout(request)
    return Response({'message': 'Logout successful'}, status=200)

#### MATCHING ####
# search


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_assign_preference_api_view(request):
    data = request.data
    print(data)
    preference = Preference()
    if "language" in data.keys():
        preference.language = data["language"]
    if "studies" in data.keys():
        preference.studies = data["studies"]
    preference.save()
    for hobby in data["hobbies"]:
        preference.hobbies.add(Hobby.objects.get(name=hobby['name']))
    request.user.userprofile.preference = preference
    request.user.userprofile.save()
    return Response(PreferenceSerializer(preference).data, status=200)


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
def search_preference_api_view(request):
    serializer = PreferenceSerializer(request.user.userprofile.preference)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_match_api_view(request):
    qs = UserProfile.objects.filter(room=request.user.userprofile.room)
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
