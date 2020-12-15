from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from ..serializers import EventSerializer, MeetingSerializer
from ..models import Event, Meeting
from django.contrib.auth.models import User


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_meeting_api_view(request, *args, **kwargs):
    serializer = MeetingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response({"message": "Invalid data"}, status=400)


@api_view(['POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def delete_meeting_api_view(request, *args, **kwargs):
    name = request.data['name']
    qs = Meeting.objects.filter(name=name).first()
    if qs != None:
        qs.delete()
        return Response({'message': f'Meeting {name} deleted'}, status=200)
    return Response({'message': 'Invalid meeting to delete'}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_meeting_api_view(request, *args, **kwargs):
    print("Hallo")
    action = request.GET.get("action")
    if action == "all":
        qs = Meeting.objects.all()
        serializer = MeetingSerializer(qs, many=True)
    elif action == "main":
        qs = Meeting.objects.filter(isBreakout=False).first()
        serializer = MeetingSerializer(qs)
    elif action == "my":
        qs = User.objects.filter(user=request.user).userProfile.meeting
        serializer = MeetingSerializer(qs)
    else:
        return Response({'message': 'Invalid action'}, status=400)
    return Response(serializer.data, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_event_api_view(request, *args, **kwargs):
    return Response({'message': 'Invalid data'}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_event_api_view(request, *args, **kwargs):
    action = request.GET.get('action')
    if action == 'all':
        qs = Event.objects.all()
        serializer = EventSerializer(qs, many=True)
        return Response(serializer.data, status=200)
    elif action == 'next':
        qs = Event.objects.order_by('date').first()
        serializer = EventSerializer(qs)
    else:
        return Response({'message': 'Invalid action'}, status=400)
    return Response(serializer.data, status=200)
