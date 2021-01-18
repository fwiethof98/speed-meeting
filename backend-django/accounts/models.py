from django.db import models
from django.contrib.auth.models import User
# from django.db.models.signals import post_save

# Create your models here.


class Hobby(models.Model):
    name = models.TextField(null=True, blank=True)


class Preference(models.Model):
    language = models.TextField(null=True, blank=True)
    studies = models.TextField(null=True, blank=True)
    hobbies = models.ManyToManyField(Hobby)


class UserProfile(models.Model):
    # Link to user model
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # Set as username
    email = models.TextField(null=True, blank=True)

    # All data from register form
    first_name = models.TextField(null=True, blank=True)
    last_name = models.TextField(null=True, blank=True)
    phone = models.TextField(null=True, blank=True)

    # Relevant for matching
    birthday = models.TextField(null=True, blank=True)
    studies = models.TextField(null=True, blank=True)
    study_level = models.TextField(null=True, blank=True)
    university = models.TextField(null=True, blank=True)
    intent = models.TextField(null=True, blank=True)
    semester = models.TextField(null=True, blank=True)

    preference = models.OneToOneField(
        Preference, null=True, on_delete=models.CASCADE)

    # Mandatory checks
    mail_check = models.BooleanField(null=True, blank=True)
    data_check = models.BooleanField(null=True, blank=True)

    # Data for event conduction
    participation = models.BooleanField(null=True, blank=True)
    socket = models.TextField(null=True)
    friends = models.ManyToManyField(
        User, related_name="friends", blank=True)
