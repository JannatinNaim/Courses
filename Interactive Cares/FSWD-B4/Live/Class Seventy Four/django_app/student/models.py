from django.db import models

# Create your models here.


class Student(models.Model):
    name = models.CharField(max_length=96)
    age = models.IntegerField()
    email = models.EmailField()
    phone = models.IntegerField()
    address = models.CharField(max_length=128)
    photo = models.ImageField(upload_to='student/images/')

    def __str__(self):
        return self.name
