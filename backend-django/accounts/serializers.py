from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Role
from meetings.serializers import MeetingSerializer


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['name']


class UserProfileSerializerWithoutFriends(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    roles = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['name', 'roles', 'socket']

    def get_name(self, obj):
        return obj.user.username

    def get_roles(self, obj):
        serializer = RoleSerializer(obj.roles, many=True)
        if serializer.is_valid():
            return serializer.data


class UserProfileSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    roles = serializers.SerializerMethodField(read_only=True)
    friends = serializers.SerializerMethodField(read_only=True)
    meeting = MeetingSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['name', 'roles', 'socket', 'friends', 'meeting']

    def get_name(self, obj):
        return obj.user.username

    def get_roles(self, obj):
        serializer = RoleSerializer(obj.roles, many=True)
        if serializer.is_valid():
            return serializer.data

    def get_friends(self, obj):
        qs = UserProfile.objects.none()
        for user in obj.friends:
            qs = qs | UserProfile.objects.filter(name=user.username).first()
        serializer = UserProfileSerializerWithoutFriends(qs, many=True)
        if serializer.is_valid():
            return serializer.data
