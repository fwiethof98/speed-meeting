from rest_framework import serializers
from .models import MatchingCriteria


class MatchingCriteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchingCriteria
        fields = ['name', 'value']
