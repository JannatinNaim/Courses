from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    return render(request, 'index.html')


def home(request):
    return HttpResponse(
        """
            <h1>Dayum!</h1>
            <p>How you doing?</p>
            <a href="{% url app %}">App</a>
        """
    )
