from django.shortcuts import redirect, render

# Create your views here.


def event_view(request):
    if request.user.is_authenticated:
        return render(request, "event/event.html")
    return redirect('login/')


def manage_view(request):
    if request.user.username == "wiethof.florian98@gmail.com":
        return render(request, "event/manage.html")
    return redirect('/')
