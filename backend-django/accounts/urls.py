from django.contrib.auth import logout
from django.urls import path

from .views import (
    data_privacy_view, logout_view,
    register_view,
    login_view
)

urlpatterns = [
    path('login/', login_view),
    path('logout/', logout_view),
    path('register/', register_view),
    path('data_privacy/', data_privacy_view)
]
