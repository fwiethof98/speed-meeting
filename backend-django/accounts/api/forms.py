from django import forms
from django.contrib.auth.models import User
from django.core.validators import validate_email

from ..models import UserProfile


class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField()

    def clean(self):
        cleaned_data = super().clean()
        if not User.objects.filter(username=cleaned_data['username']).count() == 0:
            if User.objects.get(username=cleaned_data['username']).check_password(cleaned_data['password']):
                return cleaned_data
        raise forms.ValidationError("Wrong username or password")


class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['university', 'studies', 'first_name', 'last_name',
                  'phone', 'birthday', 'status', 'intent', 'semester', 'email']


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'first_name',
                  'last_name', 'password']

    # def clean_username(self, obj):
    #     data = self.cleaned_data
    #     if User.objects.filter(username=data['username']) != None:
    #         raise forms.ValidationError(
    #             'User with that username already exists')
    #     return data

    # def clean_password(self, obj):
    #     data = self.cleaned_data
    #     if data['password'] != data['password2']:
    #         raise forms.ValidationError('Passwords are not equal')
    #     return data

    # def clean_email(self, obj):
    #     data = self.cleaned_data
    #     # if validate_email(data['email']) == False:
    #     #     raise forms.ValidationError('Invalid email')
    #     # elif User.objects.filter(email=data['email']) != None:
    #     #     raise forms.ValidationError('Mail already exists')
    #     return data
