from django.shortcuts import render
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.response import Response
from .models import (
    Pet,
    Review
)
from . serializers import (
    PetAddSerializer,
    PetListSerializer,
    PetEditSerializer,
    ReviewSerializer,
    PetDetailSerializer,
    ReviewListSerializer
)
from rest_framework.permissions import (
    IsAdminUser,
    IsAuthenticated
)
# Create your views here.

class PetAddView(CreateAPIView):
    serializer_class=PetAddSerializer
    queryset=Pet.objects.all()
    permission_classes=[IsAdminUser]

    def perform_create(self,serializer):
        category=serializer.validated_data["category"]
        serializer.save(category=category)
    
class PetListView(ListAPIView):
    serializer_class=PetListSerializer
    queryset=Pet.objects.all()

class PetDetailView(RetrieveAPIView):
    serializer_class=PetDetailSerializer
    queryset=Pet.objects.all()
    lookup_url_kwarg="id"

class PetDeleteView(DestroyAPIView):
    serializer_class=PetListSerializer
    queryset=Pet.objects.all()
    lookup_url_kwarg="id"
    permission_classes=[IsAdminUser]
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({"message":"deleted"})

class PetEditView(UpdateAPIView):

    serializer_class=PetEditSerializer
    queryset=Pet.objects.all()
    permission_classes=[IsAdminUser]
    lookup_url_kwarg='id'



"""----------------Review Views---------------------"""
class ReviewAddView(CreateAPIView):
    serializer_class=ReviewSerializer
    permission_classes=[IsAuthenticated]
    queryset=Review.objects.all()

    def create(self, request, *args, **kwargs):
        serializer=ReviewSerializer(data=request.data)
        user=request.user
        pet=Pet.objects.get(id=kwargs.get("id"))
        serializer.is_valid(raise_exception=True)
        serializer.save(user=user,pet=pet)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data)
    
class ReviewListView(ListAPIView):

    serializer_class=ReviewListSerializer
    permission_classes=[IsAuthenticated]
    

    def get_queryset(self):
        user=self.request.user
        reviews=user.review_set.all()
        return reviews

class ReviewDetailView(RetrieveUpdateDestroyAPIView):

    serializer_class=ReviewListSerializer
    permission_classes=[IsAuthenticated]
    lookup_url_kwarg="id"
    

    def get_queryset(self):
        user=self.request.user
        reviews=user.review_set.all()
        return reviews