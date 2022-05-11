from django.db import models

# Create your models here.


class Plant(models.Model):  # inheriting from Django Model class

    class Categories(models.TextChoices):  # inheriting from Django Choices class
        SUCCULENTS = 'SU', _('Succulents')
        CARNIVOROUS = 'CA', _('Carnivorous')
        BONSAI = 'BO', _('Bonsai')
        FOLIAGE = 'FO', _('Foliage')
        FLOWERING = 'FL', _('Flowering')

    name = models.CharField(max_length=40)
    id = models.AutoField(primary_key=True)
    image = models.CharField(max_length=1000)
    category = models.CharField(
        max_length=2,
        choices=Categories.choices
    )
    height = models.IntegerField
    watering_frequency = models.CharField(max_length=50)
    soil = models.CharField(max_length=50)
    light_tolerance = models.CharField(max_length=50)
    pot_size = models.IntegerField
    price = models.FloatField
    creation_date = models.DateTimeField
    modification_date = models.DateTimeField

    def __str__(self):
        return f"{self.name} - {self.price}"
