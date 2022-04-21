from django.db import models
from mtlapp.utils import *
from django.conf import settings

# Create your models here.
class randomRoll(models.Model):
    #protoss, zerg, terran
    li = rollUnits()
    rollId = models.AutoField(primary_key=True)
    protossUnit = models.CharField(max_length=100)
    zergUnit = models.CharField(max_length=100)
    terranUnit = models.CharField(max_length=100)