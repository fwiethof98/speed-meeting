from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Room(models.Model):
    link = models.TextField(null=True, blank=True)


class Event(models.Model):
    time = models.DateTimeField(null=True, blank=True)
    link = models.TextField(null=True, blank=True)
    pw_mod = models.TextField(null=True, blank=True)
    name = models.TextField(null=True, blank=True)
    rooms = models.ManyToManyField(Room)
