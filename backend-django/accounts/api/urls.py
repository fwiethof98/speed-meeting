from django.urls import path

from .views import (
    user_search_api_view,
    create_role_api_view,
    search_role_api_view,
    delete_role_api_view
)

urlpatterns = [
    path('users/', user_search_api_view),
    path('roles/create/', create_role_api_view),
    path('roles/', search_role_api_view),
    path('roles/delete/', delete_role_api_view),
]
