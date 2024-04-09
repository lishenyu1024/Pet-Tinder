from rest_framework import serializers
from .models import Activity
from pet.serializers import PetListSerializer

class ActivitySerializer(serializers.ModelSerializer):
    pet=serializers.CharField(read_only=True)
    status=serializers.CharField(read_only=True)
    multiple_choice=serializers.ChoiceField(choices=Activity.payment_options)
    class Meta:
        model=Activity
        fields=[
            "id",
            "pet",
            "status",
            "activityed_date",
            "leave_comment",
            "multiple_choice"
        ]
        extra_kwargs={
            "leave_comment":{"required":True},
        }

class ActivityListSerializer(serializers.ModelSerializer):
    pet=serializers.CharField(read_only=True)
    status=serializers.CharField(read_only=True)
    multiple_choice=serializers.CharField(read_only=True)
    pet=PetListSerializer()
    class Meta:
        model=Activity
        fields=[
            "id",
            "pet",
            "status",
            "activityed_date",
            "leave_comment",
            "multiple_choice"
        ]
        
