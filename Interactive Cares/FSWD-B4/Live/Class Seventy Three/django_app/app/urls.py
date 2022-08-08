from django.urls import path
from .views import *

urlpatterns = [
    path('app/', index, name='app'),
    path('home/', home, name='home')
]
