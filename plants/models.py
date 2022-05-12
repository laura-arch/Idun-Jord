from pickle import TRUE
from django.db import models

# Create your models here.


class Plant(models.Model):  # inheriting from Django Model class

    class Categories(models.TextChoices):  # inheriting from Django Choices class
        SUCCULENTS = 'SU', ('Succulents')
        CARNIVOROUS = 'CA', ('Carnivorous')
        BONSAI = 'BO', ('Bonsai')
        FOLIAGE = 'FO', ('Foliage')
        FLOWERING = 'FL', ('Flowering')

    name = models.CharField(max_length=40)
    id = models.AutoField(primary_key=True)
    image = models.CharField(max_length=1000)
    category = models.CharField(
        max_length=2,
        choices=Categories.choices
    )
    height = models.IntegerField(null=True)
    watering_frequency = models.CharField(max_length=50, null=True)
    soil = models.CharField(max_length=50)
    light_tolerance = models.CharField(max_length=50)
    pot_size = models.IntegerField(null=True)
    price = models.FloatField()
    creation_date = models.DateTimeField(auto_now_add=True)
    modification_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.price}"
