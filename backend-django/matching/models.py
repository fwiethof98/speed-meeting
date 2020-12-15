from django.db import models

from django.contrib.auth.models import User

# Create your models here.


class MatchingCriteria(models.Model):
    name = models.TextField(blank=True, null=True)
    value = models.IntegerField(blank=True, null=True)
    user = models.ForeignKey(
        User, blank=True, null=True, on_delete=models.CASCADE)
