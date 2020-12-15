from rest_framework import serializers
from .models import Meeting, Event


class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = ['meetingID', 'name', 'attendeePW',
                  'moderatorPW', 'isBreakout']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['name', 'date']
