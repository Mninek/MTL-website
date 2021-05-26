from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from mtlapp.utils import *

# Create your views here.
def randomRollAPI(request, id=1):
    if request.method=='GET':
        #protoss, zerg, terran
        li = rollUnits()
        return JsonResponse({'protossUnit': li[0], 'zergUnit': li[1], 'terranUnit': li[2]})

#23:30 in the art of engineer video to see get/post/put