from django.shortcuts import render
from .models import Activity
from .serializers import ActivitySerializer,ActivityListSerializer
from rest_framework.generics import CreateAPIView,ListAPIView,UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from pet.models import Pet
from rest_framework.response import Response
from rest_framework import status
from likes.models import Likes

class ActivityView(CreateAPIView):
    serializer_class=ActivitySerializer
    queryset=Activity.objects.all()
    permission_classes=[IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        user=request.user
        pet=Pet.objects.get(id=kwargs.get("id"))
        serializer.is_valid(raise_exception=True)
        serializer.save(user=user,pet=pet)
        likes=user.likes_set.filter(pet=pet)
        likes.delete()
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data)

class ActivityListView(ListAPIView):

    serializer_class=ActivityListSerializer
    queryset=Activity.objects.all()
    permission_classes=[IsAuthenticated]

    def list(self, request, *args, **kwargs):
        user=request.user
        activitys=user.activity_set.all()
        serializer=ActivityListSerializer(activitys,many=True)
        return Response(serializer.data)
    
class ActivityCancelView(UpdateAPIView):

    serializer_class=ActivitySerializer
    queryset=Activity.objects.all()
    permission_classes=[IsAuthenticated]
    lookup_url_kwarg="id"

    def update(self, request, *args, **kwargs):
        try:
            user=request.user
            activity=user.activity_set.get(id=kwargs.get("id"))
            activity.status="activity-cancelled"
            activity.save()
            serializer=ActivitySerializer(activity)
            return Response(serializer.data)
        except:
            return Response({"message":"No activity with this id"},status=status.HTTP_404_NOT_FOUND)