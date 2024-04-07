from django.urls import path
from .views import (
    PetAddView,
    PetListView,
    PetDetailView,
    PetDeleteView,
    PetEditView,
    ReviewAddView,
    ReviewListView,
    ReviewDetailView
)

urlpatterns=[
    path('pets/add',PetAddView.as_view(),name='add-pet'),
    path('pets',PetListView.as_view(),name='list-pet'),
    path('pets/<str:id>',PetDetailView.as_view(),name='detail-pet'),
    path('pets/<str:id>/remove',PetDeleteView.as_view(),name='remove-pet'),
    path('pets/<str:id>/edit',PetEditView.as_view(),name='edit-pet'),
    path('pets/<str:id>/add_review',ReviewAddView.as_view(),name='add-review'),
    path('my_reviews',ReviewListView.as_view(),name='my-reviews'),
    path('my_reviews/<int:id>',ReviewDetailView.as_view(),name='my-reviews-detail')
]