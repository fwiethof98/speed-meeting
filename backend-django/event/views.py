from django.shortcuts import redirect, render

# Create your views here.


def event_view(request):
    if request.user.is_authenticated:
        return render(request, "event/event.html")
    return redirect('login/')
