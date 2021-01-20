from django.urls import path
from .views import (
    event_create_api_view,
    event_delete_api_view,
    event_search_api_view,
    event_start_api_view,
    room_search_api_view,
    event_cleanup_api_view,
    event_leave_api_view
)

urlpatterns = [
    path("event/", event_search_api_view),
    path("event/create/", event_create_api_view),
    path("event/delete/", event_delete_api_view),
    path("event/start/", event_start_api_view),
    path("event/leave/", event_leave_api_view),
    path("room/", room_search_api_view),
    path("event/cleanup/", event_cleanup_api_view)
]
