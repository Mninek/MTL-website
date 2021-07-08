from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from mtlapp.utils import *
import json

# Create your views here.
def randomRollAPI(request, id=1):
    if request.method=='GET':
        #protoss, zerg, terran
        li = rollUnits()
        return JsonResponse({'protossUnit': li[0], 'zergUnit': li[1], 'terranUnit': li[2]})

@csrf_exempt
def getTeamsRandomRoll(request, id=1):
    if request.method=='POST':
        json_data = json.loads(request.body)

        races = json_data['races']
        races = races.replace('[', '').replace(']', '').replace('\"','')
        races = races.split(',')

        names = json_data['names']
        names = names.replace('[', '').replace(']', '').replace('\"','')
        names = names.split(',')

        games = json_data['numGames'].replace("\"", '')
        games = int(games)

        i = 0
        jsonReturn = {}
        for i in range(8):
            curr = {}
            j = 0
            #curr["name"] = names[i] dont think this is needed, need more testing
            #print(j)
            #print(games)
            for j in range(games):
                units = rollUnits()
                if races[i] == 'P':
                    curr["unit" + str(j)] = units[0]
                elif races[i] == 'Z':
                    curr["unit" + str(j)] = units[1]
                elif races[i] == 'T':
                    curr["unit" + str(j)] = units[2]
                else:
                    curr["unit" + str(j)] = ",".join(units)
            jsonReturn["p" + str(i)] = curr
        return JsonResponse(jsonReturn)

#23:30 in the art of engineer video to see get/post/put