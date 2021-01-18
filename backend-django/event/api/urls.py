from django.urls import path
from .views import (
    event_search_api_view,
    room_search_api_view
)

urlpatterns = [
    path("event/", event_search_api_view),
    path("room/", room_search_api_view)
]
