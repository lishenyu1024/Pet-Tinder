from django.urls import path
from .views import (
    ActivityView,
    ActivityListView,
    ActivityCancelView
)
urlpatterns=[
    path('pets/<str:id>/place_activity',ActivityView.as_view(),name='place-activity'),
    path('activitys',ActivityListView.as_view(),name='activitys'),
    path('activitys/<int:id>/cancel',ActivityCancelView.as_view(),name='activity-cancel'),
]