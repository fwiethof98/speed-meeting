from django.urls import path

from .views import (
    user_search_api_view
)

urlpatterns = [
    path('', user_search_api_view)
]
