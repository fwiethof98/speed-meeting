from django.shortcuts import render

# Create your views here.


def event_view(request):
    return render(request, "event/event.html")
