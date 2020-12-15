from django.urls import path

from .views import (
    create_criteria_api_view,
    search_criteria_api_view,
    delete_criteria_api_view,
    assign_criteria_api_view,
    assign_friend_api_view
)

urlpatterns = [
    path('criteria/create/', create_criteria_api_view),
    path('criteria/', search_criteria_api_view),
    path('criteria/delete/', delete_criteria_api_view),
    path('criteria/assign/', assign_criteria_api_view),
    path('friends/assign/', assign_friend_api_view)
]
