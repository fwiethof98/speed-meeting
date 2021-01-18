from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from ..models import Event
from .. serializers import EventSerializer, RoomSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def event_search_api_view(request):
    qs = Event.objects.order_by("time").first()
    if qs != None:
        serializer = EventSerializer(qs)
        return Response(serializer.data, status=200)
    return Response({'message': 'No new events available'}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def room_search_api_view(request):
    room = request.user.userprofile.room
    if room != None:
        return Response(RoomSerializer(room).data, status=200)
    return Response({'message': 'No room specified for current user'}, status=400)
