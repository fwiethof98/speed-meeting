from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_search_api_view(request, *args, **kwargs):
    return Response({}, status=400)
