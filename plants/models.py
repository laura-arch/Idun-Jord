from django.db import models

# Create your models here.


class Plant(models.Model):  # Plant model inherits from Django Model class

    class Categories(models.TextChoices):
        SUCCULENTS = 'SU', _('Succulents')
        CARNIVOROUS = 'CA', _('Carnivorous')
        BONSAI = 'BO', _('Bonsai')
        FOLIAGE = 'FO', _('Foliage')
        FLOWERING = 'FL', _('Flowering')

    # style from https://docs.djangoproject.com/en/4.0/ref/models/fields/
    # is this correct?

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
    last_modification_date = models.DateTimeField

    def __str__(self):
        return f"{self.name} - {self.price}"
