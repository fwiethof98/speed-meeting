from django.urls import path

from .views import (
    search_preference_api_view, user_assign_preference_api_view, user_login_api_view,
    user_logout_api_view,
    user_register_api_view,
    search_hobbies_api_view
    # user_search_api_view
)

urlpatterns = [
    path('login/', user_login_api_view),
    path('logout/', user_logout_api_view),
    path('register/', user_register_api_view),
    path('preference/assign/', user_assign_preference_api_view),
    path('hobbies/', search_hobbies_api_view),
    path('preference/', search_preference_api_view)
    # path('users/', user_search_api_view)
]
