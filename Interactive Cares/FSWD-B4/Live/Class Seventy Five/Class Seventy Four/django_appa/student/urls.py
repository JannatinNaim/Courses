from django.urls import path
from student.views import *

urlpatterns = [
    path('', index, name='student/index'),
]
