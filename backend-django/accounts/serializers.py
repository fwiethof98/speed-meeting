from rest_framework import serializers
from .models import Feedback, Hobby, UserProfile
# from event.serializers import RoomSerializer


class HobbySerializer(serializers.ModelSerializer):
    class Meta:
        model = Hobby
        fields = ['name']


class FriendSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['first_name', 'last_name', 'phone', 'university', 'studies', 'status',
                  'birthday', 'intent', 'username']

    def get_username(self, obj):
        return obj.user.username


class FeedbackSerializer(serializers.ModelSerializer):
    user_a = FriendSerializer(read_only=True)
    user_b = FriendSerializer(read_only=True)

    class Meta:
        model = Feedback
        fields = ['content', 'user_a', 'user_b']


class UserProfileSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    friends = serializers.SerializerMethodField(read_only=True)
    # room = RoomSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['first_name', 'last_name', 'phone', 'university', 'studies', 'status', 'data_check', 'mail_check',
                  'socket', 'friends', 'participating', 'birthday']

    def get_name(self, obj):
        return obj.user.username

    def get_friends(self, obj):
        qs = UserProfile.objects.none()
        for user in obj.friends:
            qs = qs | UserProfile.objects.filter(name=user.username).first()
        serializer = FriendSerializer(qs, many=True)
        if serializer.is_valid():
            return serializer.data
