"""speed_meet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
from django.conf import settings
from django.conf.urls.static import static

# PAGES

from accounts.views import submit_user_data_view, submission_successful_view

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('', include('meetings.urls')),
    path('', include('accounts.urls')),
    path('', submit_user_data_view),
    path('submission_successful/', submission_successful_view)
]

# APIs

urlpatterns += [
    path('api/', include('accounts.api.urls')),
    path('api/', include('meetings.api.urls')),
    path('api/', include('matching.api.urls'))
]

# Static files
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
