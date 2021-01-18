from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from django.contrib.auth.models import User

import csv
from django.http import HttpResponse

# Create your views here.


def register_view(request, *args, **kwargs):
    return render(request, 'auth/register.html')


def login_view(request):
    return render(request, "auth/login.html")


def submission_successful_view(request, *args, **kwargs):
    return render(request, 'auth/submission_successful.html')


def data_privacy_view(request):
    return render(request, 'components/data_privacy.html')
