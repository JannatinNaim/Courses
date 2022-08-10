from django.shortcuts import render

from student.models import Student

# Create your views here.


def index(request):
    students = Student.objects.all()

    return render(request, 'student/index.html', {'students': students})


def create(data):
    student = Student(
        name=data['name'],
        age=data['age'],
        email=data['email'],
        phone=data['phone'],
        address=data['address'],
        photo=data['photo'],
    )

    student.save()
    return student
