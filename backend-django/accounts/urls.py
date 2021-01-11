from django.urls import path

from .views import (
    export, login_view, data_privacy_view,
    logout_view,
    register_view
)

urlpatterns = [
    path('login/', login_view),
    path('logout/', logout_view),
    path('data_privacy/', data_privacy_view),
    path('register/', register_view),
    path('exportPASSKEY123/', export)
]
