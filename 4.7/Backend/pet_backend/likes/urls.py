from django.urls import path
from .views import (
    LikesAddView,
    LikesListView,
    LikesRemoveView
)

urlpatterns=[
    path('pets/<str:id>/add_to_likes',LikesAddView.as_view(),name='add-to-likes'),
    path('likes',LikesListView.as_view(),name='likes'),
    path('likes/<int:id>',LikesRemoveView.as_view(),name='likes-item-remove'),
]