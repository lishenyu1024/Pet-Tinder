from rest_framework import serializers
from .models import Category
from pet.serializers import PetListSerializer

class CategorySerializer(serializers.ModelSerializer):
   
    class Meta:
        model=Category
        fields=[
            "id",
            "name",
            "icon",
            
        ]
        extra_kwargs={
            "name":{"required":True},
            "icon":{"required":True}
        }

class CategoryDetailSerializer(serializers.ModelSerializer):
    pets=PetListSerializer(many=True,read_only=True)
    class Meta:
        model=Category
        fields=[
            "id",
            "name",
            "icon",
            "pets"
        ]
        