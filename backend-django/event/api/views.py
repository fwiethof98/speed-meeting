from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User
from accounts.models import UserProfile

from ..models import Event, Room
from .. serializers import EventReadSerializer, EventCreateSerializer, RoomReadSerializer, RoomSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def event_search_api_view(request):
    action = request.GET.get('action')
    if action == "next":
        qs = Event.objects.order_by("time").first()
        if qs != None:
            serializer = EventReadSerializer(qs)
            return Response(serializer.data, status=200)
    elif action == "all":
        serializer = EventReadSerializer(Event.objects.all(), many=True)
        return Response(serializer.data, status=200)
    return Response({'message': 'No new events available'}, status=400)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def event_create_api_view(request):
    serializer = EventCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    print(serializer.errors)
    return Response({'message': 'Wrong event data provided'}, status=400)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def event_delete_api_view(request):
    Event.objects.get(name=request.data['name']).delete()
    return Response({'message': 'Event was deleted'}, status=200)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def room_search_api_view(request):
    action = request.GET.get("action")
    qs = []
    serializer = []
    if action == "my":
        qs = request.user.userprofile.room
        serializer = RoomReadSerializer(qs)
    elif action == "all":
        qs = Room.objects.all()
        serializer = RoomReadSerializer(qs, many=True)
    return Response(serializer.data, status=200)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def event_cleanup_api_view(request):
    if request.user.username == "wiethof.florian98@gmail.com":
        Event.objects.order_by("time").first().delete()
        Room.objects.all().delete()
        return Response({'message': 'Event was cleaned up'}, status=200)
    return Response({'message': 'Not Florian'}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def event_leave_api_view(request):
    user = UserProfile.objects.filter(socket=request.GET.get("socket")).first()
    match = UserProfile.objects.filter(room=user.room).exclude(
        id=user.id)
    if match.count() > 0:
        match = match.first()
        user.socket = None
        user.save()
        match.room = None
        match.save()
        return Response({"socket": match.socket}, status=200)
    else:
        return Response({"message": "No match available"}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def event_start_api_view(request):
    Room.objects.all().delete()
    matches = []
    filters = [
        ["pref_studies", "pref_language", "intent"],
        ["pref_studies", "pref_language"],
        ["pref_studies", "intent"],
        ["pref_studies"],
        ["pref_language", "intent"],
        ["pref_language"],
        ["intent"],
        [""],
        ["rest"]
    ]
    rest_users = User.objects.all().order_by("?")
    temp = []
    for filter in filters:
        rest_users, temp = get_matching_groups(filter, rest_users)
        matches.extend(temp)
        rest_users.extend(rest_users)
    for match in matches:
        name = "" + match['man'].userprofile.first_name + \
            match['woman'].userprofile.first_name
        if Room.objects.filter(name=name).count() > 0:
            continue
        room = Room(name=name)
        room.save()
        for key in match:
            user = match[key]
            user.userprofile.room = room
            user.userprofile.save()
    return Response({'message': 'Rooms and matches were set up!'}, status=200)


def get_matching_groups(filters, users):
    groups = {}
    matches = []
    rest_users = []
    for user in users:
        match_key = ""
        for filter in filters:
            if filter != "":
                if filter == "pref_studies":
                    if getattr(user.userprofile, filter) == "same":
                        match_key += getattr(user.userprofile, "studies")
                elif filter == "pref_language":
                    if getattr(user.userprofile, filter) != None:
                        match_key += getattr(user.userprofile, filter)
                else:
                    val = getattr(user.userprofile, filter)
                    if val != None:
                        match_key += val
        if match_key in groups:
            groups[match_key].append(user)
        else:
            groups[match_key] = [user]

    temp = []
    for key in groups:
        # print(key)
        if len(groups[key]) < 2:
            rest_users.extend(groups[key])
        else:
            temp, rest = get_group_matches(groups[key], filters[0])
            matches.extend(temp)
            rest_users.extend(rest)
    return rest_users, matches


def get_group_matches(users, filter):
    men, women = split_list(users)
    unmatched = []
    matches = []
    for i in range(len(women)):
        maxScore = -1
        match = {}
        for j in range(len(men)):
            score = get_hobby_score(men[j], women[i])
            if score > maxScore and (not men[j] in women[i].userprofile.friends.all() or filter == "rest"):
                match = {"man": men[j], "woman": women[i]}
                maxScore = score
        if "man" in match.keys():
            men.remove(match["man"])
            matches.append(match)
        else:
            unmatched.append(women[i])

    unmatched.extend(men)
    return matches, unmatched


def get_hobby_score(user_a, user_b):
    hobby_a_set = set(user_a.userprofile.hobbies.all())
    hobby_b_set = set(user_b.userprofile.hobbies.all())
    return len(hobby_a_set & hobby_b_set)


def split_list(p_list):
    half = len(p_list) // 2
    return p_list[:half], p_list[half:]
