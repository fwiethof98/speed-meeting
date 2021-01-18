from django.urls import path

from .views import (
    data_privacy_view,
    register_view,
    login_view
)

urlpatterns = [
    # path('logout/', logout_view),
    path('login/', login_view),
    path('register/', register_view),
    # path('exportPASSKEY123/', export)
]
