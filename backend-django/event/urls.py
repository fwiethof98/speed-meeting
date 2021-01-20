from django.urls import path
from .views import event_view, manage_view

urlpatterns = [
    path("", event_view),
    path("manage/", manage_view)
]
