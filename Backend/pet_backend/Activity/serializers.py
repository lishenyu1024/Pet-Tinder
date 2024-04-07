from rest_framework import serializers
from .models import Activity
from pet.serializers import PetListSerializer

class ActivitySerializer(serializers.ModelSerializer):
    pet=serializers.CharField(read_only=True)
    status=serializers.CharField(read_only=True)
    payment_method=serializers.ChoiceField(choices=Activity.payment_options)
    class Meta:
        model=Activity
        fields=[
            "id",
            "pet",
            "status",
            "activityed_date",
            "billing_address",
            "payment_method"
        ]
        extra_kwargs={
            "billing_address":{"required":True},
        }

class ActivityListSerializer(serializers.ModelSerializer):
    pet=serializers.CharField(read_only=True)
    status=serializers.CharField(read_only=True)
    payment_method=serializers.CharField(read_only=True)
    pet=PetListSerializer()
    class Meta:
        model=Activity
        fields=[
            "id",
            "pet",
            "status",
            "activityed_date",
            "billing_address",
            "payment_method"
        ]
        
