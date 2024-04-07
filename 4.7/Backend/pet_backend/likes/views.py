from django.shortcuts import render
from .models import Likes
from .serializers import LikesSerializer,LikesListSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import DestroyAPIView,ListAPIView
from pet.models import Pet
from rest_framework.views import APIView
from rest_framework.status import HTTP_404_NOT_FOUND


class LikesAddView(APIView):
    permission_classes=[IsAuthenticated]

    def post(self,request,*args,**kwargs):
        serializer=LikesSerializer(data=request.data)
        id=kwargs.get("id")
        pet=Pet.objects.get(id=id)
        user=request.user
        serializer.is_valid(raise_exception=True)  
        try:
             likes=Likes.objects.get(pet=pet,user=user)
             likes.quantity+=1
             likes.save()
             data={"message":"success"}
             return Response(data)

        except:
            serializer.save(user=user,pet=pet)
            return Response(serializer.data)


class LikesListView(ListAPIView):

    serializer_class=LikesListSerializer
    permission_classes=[IsAuthenticated]
    
    def get_queryset(self):
        user=self.request.user
        likes=user.likes_set.all()
        return likes

class LikesRemoveView(DestroyAPIView):
    serializer_class=LikesSerializer
    permission_classes=[IsAuthenticated]
    lookup_url_kwarg="id"
    
    def delete(self, request, *args, **kwargs):
        id=kwargs.get("id")
        try:
            user=request.user
            likesitem=user.likes_set.get(id=id)
            likesitem.delete()
            return Response({"message":"item removed successfully"})
        except:
            return Response({
                "message":"no such item"
            },status=HTTP_404_NOT_FOUND)