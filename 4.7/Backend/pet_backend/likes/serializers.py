from rest_framework import serializers
from . models import Likes
from pet.serializers import PetDetailSerializer

class LikesSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)
    pet = serializers.CharField(read_only=True)
    
    class Meta:
        model=Likes
        fields=[
            "id",
            "user",
            "pet",
            "quantity",
            "created_date",
            
        ]

class LikesListSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)
    pet = PetDetailSerializer()
    
    class Meta:
        model=Likes
        fields=[
            "id",
            "user",
            "pet",
            "quantity",
            "created_date", 
        ]
    