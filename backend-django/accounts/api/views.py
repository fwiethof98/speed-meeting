from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from ..serializers import RoleSerializer, UserDataEntrySerializer
from ..models import Role

from django.contrib.auth.models import User


@api_view(['POST'])
def user_login_api_view(request, *args, **kwargs):
    data = request.data
    user = User.objects.get(username=data['username'])
    if user != None:
        if user.check_password(data['password']):
            login(request, user)
            return redirect('/')
    return Response({'message': 'Wrong username or password'}, status=400)


@api_view(['POST'])
def user_register_api_view(request, *args, **kwargs):
    data = request.data
    return Response({'message': 'Invalid data'}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_search_api_view(request, *args, **kwargs):
    return Response({}, status=400)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_role_api_view(request, *args, **kwargs):
    serializer = RoleSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response({'message': 'Invalid data'}, status=400)


@api_view(['GET'])
def search_role_api_view(request, *args, **kwargs):
    action = request.GET.get('action')
    if action == 'all':
        qs = Role.objects.all()
        serializer = RoleSerializer(qs, many=True)
    else:
        return Response({'message': 'Invalid action'}, status=400)
    return Response(serializer.data, status=200)


@api_view(['POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def delete_role_api_view(request, *args, **kwargs):
    name = request.data['name']
    if name != None:
        qs = Role.objects.filter(name=name).first()
        if qs != None:
            qs.delete()
            return Response({'message': f'Role {name} was deleted.'}, status=200)
        return Response({'message': 'Role does not exist.'}, status=404)
    return Response({'message': 'No role name was passed.'}, status=400)


@api_view(['POST'])
def submit_user_data_api_view(request, *args, **kwargs):
    serializer = UserDataEntrySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response({'message': 'Invalid user data.'}, status=400)
