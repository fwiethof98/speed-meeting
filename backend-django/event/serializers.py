from rest_framework import serializers
from .models import Event, Room


class RoomReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['name', 'id']


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['name']


class EventReadSerializer(serializers.ModelSerializer):
    rooms = RoomSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = ['name', 'meetingID', 'time', 'moderatorPW', 'rooms']


class EventBBBSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['meetingID', 'moderatorPW']


class EventCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['name', 'meetingID', 'time', 'moderatorPW']
