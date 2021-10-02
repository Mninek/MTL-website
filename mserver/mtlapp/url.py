from django.conf.urls import url
from mtlapp import views

urlpatterns=[
    url(r'^api/randomRoll/$', views.randomRollAPI),
    url(r'^api/teamsRandomRoll/$', views.getTeamsRandomRoll)
]