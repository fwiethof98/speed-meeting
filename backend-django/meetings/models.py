from django.db import models

# Create your models here.


class Meeting(models.Model):
    meetingID = models.AutoField(primary_key=True)
    name = models.TextField(null=True, blank=True)
    attendeePW = models.TextField(null=True, blank=True)
    moderatorPW = models.TextField(null=True, blank=True)
    isBreakout = models.BooleanField(null=True, blank=True)


class Event(models.Model):
    name = models.TextField(null=True, blank=True)
    date = models.DateField(null=True, blank=True)
