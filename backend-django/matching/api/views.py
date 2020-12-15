from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from ..serializers import MatchingCriteriaSerializer
from ..models import MatchingCriteria
from accounts.models import UserProfile


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_criteria_api_view(request, *args, **kwargs):
    serializer = MatchingCriteriaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response({'message': 'Invalid data'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_criteria_api_view(request, *args, **kwargs):
    action = request.GET.get('action')
    if action == 'user':
        qs = MatchingCriteria.objects.filter(
            user__username=request.user.username)
        serializer = MatchingCriteriaSerializer(qs, many=True)
    elif action == 'all':
        qs = MatchingCriteria.objects.filter(user__isnull=True)
        serializer = MatchingCriteriaSerializer(qs, many=True)
    elif action == 'exclude-user':
        user_criteria = list(MatchingCriteria.objects.filter(
            user__username=request.user.username).values_list('name'))
        all_criteria = list(MatchingCriteria.objects.filter(
            user__isnull=True).values_list('name'))
        open_criteria = list(set(all_criteria) - set(user_criteria))
        data = [{'name': c[0]} for c in open_criteria]
        return Response(data, status=200)
    elif action == 'example':
        qs = MatchingCriteria.objects.order_by("name")[0:3]
        serializer = MatchingCriteriaSerializer(qs, many=True)
    else:
        return Response({'message': 'Invalid action.'}, status=400)
    return Response(serializer.data, status=200)


@ api_view(['POST', 'DELETE'])
@ permission_classes([IsAuthenticated])
def delete_criteria_api_view(request, *args, **kwargs):
    name = request.data['name']
    if name != None:
        qs = MatchingCriteria.objects.filter(name=name).first()
        if qs != None:
            qs.delete()
            return Response({'message': f'Criteria {name} was deleted.'}, status=200)
        return Response({'message': 'Criteria does not exist.'}, status=404)
    return Response({'message': 'No criteria name was passed.'}, status=400)


@ api_view(['POST'])
@ permission_classes([IsAuthenticated])
def assign_criteria_api_view(request, *args, **kwargs):
    action = request.data['action']
    data = request.data['data']
    if action == 'assign':
        MatchingCriteria.objects.filter(user=request.user).delete()
        serializer = MatchingCriteriaSerializer(data=data, many=True)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'message': 'Criteria assigned'}, status=200)
        else:
            return Response({'message': 'Invalid data'}, status=400)
    elif action == 'remove':
        qs = MatchingCriteria.objects.filter(
            user=request.user).filter(name=data.name).first()
        if qs != None:
            qs.delete()
            return Response({'message': 'Criteria deleted'}, status=200)
        return Response({'message': 'Criteria not found'}, status=404)
    else:
        return Response({'message': 'Invalid action'}, status=400)


@ api_view(['POST'])
@ permission_classes([IsAuthenticated])
def assign_friend_api_view(request, *args, **kwargs):
    action = request.data['action']
    data = request.data['data']
    qs = User.objects.filter(user__username=data.username).first()
    if qs != None:
        if action == 'assign':
            request.user.userProfile.friends.add(qs)
            return Response({'message': f'Added friend'}, status=200)
        elif action == 'remove':
            request.userUserProfile.friends.remove(qs)
            return Response({'message': f'Removed friend'}, status=200)
        else:
            return Response({'message': 'Invalid action'}, status=400)
    else:
        return Response({'message': 'User not found'}, status=404)
