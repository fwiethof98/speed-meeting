from django.shortcuts import render, redirect
from django.contrib.auth import login, logout

# Create your views here.


def register_view(request, *args, **kwargs):
    return render(request, 'auth/register.html')


def logout_view(request):
    logout(request)
    return redirect("/login/")


def login_view(request):
    return render(request, "auth/login.html")


def submission_successful_view(request, *args, **kwargs):
    return render(request, 'auth/submission_successful.html')


def data_privacy_view(request):
    return render(request, 'components/data_privacy.html')
