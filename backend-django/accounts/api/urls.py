from django.urls import path

from .views import (
    create_hobby_api_view,
    delete_hobby_api_view,
    search_hobby_api_view,
    search_match_api_view,
    user_assign_preference_api_view,
    user_is_authenticated_view,
    user_login_api_view,
    user_register_api_view,
    user_participate_api_view,
    friend_feedback_api_view
)

urlpatterns = [
    path('login/', user_login_api_view),
    path('register/', user_register_api_view),
    path('preference/assign/', user_assign_preference_api_view),
    path('hobby/', search_hobby_api_view),
    path('hobby/create/', create_hobby_api_view),
    path('hobby/delete/', delete_hobby_api_view),
    path('match/', search_match_api_view),
    path('participate/', user_participate_api_view),
    path('authenticated/', user_is_authenticated_view),
    path('friends/', friend_feedback_api_view)
    # path('users/', user_search_api_view)
]
