from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from meetings.models import Meeting

# Create your models here.


class Role(models.Model):
    name = models.TextField()


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    roles = models.ManyToManyField(Role, blank=True)
    socket = models.TextField(null=True)
    meeting = models.ForeignKey(
        Meeting, blank=True, null=True, on_delete=models.CASCADE)
    friends = models.ManyToManyField(
        User, related_name="friends", blank=True)


class UserDataEntry(models.Model):
    birthday = models.TextField(null=True, blank=True)
    email = models.TextField(null=True, blank=True)
    first_name = models.TextField(null=True, blank=True)
    last_name = models.TextField(null=True, blank=True)
    mail_accept = models.BooleanField(null=True, blank=True)
    mobile_number = models.TextField(null=True, blank=True)
    privacy_accept = models.BooleanField(null=True, blank=True)
    studies = models.TextField(null=True, blank=True)
    study_level = models.TextField(null=True, blank=True)
    university = models.TextField(null=True, blank=True)
    intent = models.TextField(null=True, blank=True)
    semester = models.TextField(null=True, blank=True)
    password = models.TextField(null=True, blank=True)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        profile, created = UserProfile.objects.get_or_create(user=instance)


post_save.connect(create_user_profile, sender=User)
