from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from django.contrib.auth.models import User
from .models import UserDataEntry

import csv
from django.http import HttpResponse

# Create your views here.


def login_view(request, *args, **kwargs):
    form = AuthenticationForm(request, data=request.POST or None)
    if form.is_valid():
        user_ = form.get_user()
        login(request, user_)
        return redirect('/')
    context = {
        'form': form
    }
    return render(request, 'auth/login.html', context=context)


def logout_view(request, *args, **kwargs):
    if request.method == 'POST':
        logout(request)
        return redirect('/login')
    return render(request, 'auth/logout.html')


def register_view(request, *args, **kwargs):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        user = form.save(commit=True)
        user.set_password(form.cleaned_data.get("password"))
        login(request, user)
        return redirect("/login")
    context = {
        'form': form
    }
    return render(request, 'auth/register.html', context=context)


def submit_user_data_view(request, *args, **kwargs):
    return render(request, 'auth/user_data.html')


def submission_successful_view(request, *args, **kwargs):
    return render(request, 'auth/submission_successful.html')


def data_privacy_view(request):
    return render(request, 'components/data_privacy.html')


def export(request):
    response = HttpResponse(content_type='text/csv')
    writer = csv.writer(response)
    writer.writerow(['First Name', 'Last Name', 'Email', 'Mobile', 'Birthday',  'Mail-Accept',
                     'Privacy-Accept', 'Studies', 'Study Level', 'University', 'Intent', 'Semester'])

    for entry in UserDataEntry.objects.all().values_list('first_name', 'last_name', 'email', 'mobile_number', 'birthday', 'mail_accept', 'privacy_accept', 'studies', 'study_level', 'university', 'intent', 'semester'):
        writer.writerow(entry)

    response['Content-Disposition'] = 'attachment; filename="entries.csv"'
    return response
