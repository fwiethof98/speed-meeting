from django.urls import path

from .views import (
    create_meeting_api_view,
    search_meeting_api_view,
    delete_meeting_api_view,
    create_event_api_view,
    search_event_api_view
)

urlpatterns = [
    path('meetings/create/', create_meeting_api_view),
    path('meetings/', search_meeting_api_view),
    path('meetings/delete/', delete_meeting_api_view),
    path('events/create/', create_event_api_view),
    path('events/', search_event_api_view)
]
