from django.urls import path
from .views import event_view

urlpatterns = [
    path("", event_view)
]
