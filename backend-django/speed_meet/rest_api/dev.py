from rest_framework import authentication
from django.contrib.auth.models import User


class DevAuthentication(authentication.BasicAuthentication):
    def authenticate(self, request):
        # return(User.objects.first(), None)
        user_address = request.META['REMOTE_ADDR']
        if "HTTP_ORIGIN" in request.META:
            user_address += request.META["HTTP_ORIGIN"]
        if "HTTP_HOST" in request.META:
            user_address += request.META["HTTP_HOST"]
        print(user_address)
        if user_address.find("127.0.0.1") > -1 and user_address.find("gathr") == -1 and user_address.find("127.0.0.1127.0.0.1:8000") == -1:
            qs = User.objects.all()
            user = qs.first()
            return (user, None)
        else:
            return None
