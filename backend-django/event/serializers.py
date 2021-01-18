from rest_framework import serializers
from .models import Event, Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['link']


class EventSerializer(serializers.ModelSerializer):
    rooms = RoomSerializer(many=True)

    class Meta:
        model = Event
        fields = ['name', 'link', 'date', 'pw_mod', 'rooms']
