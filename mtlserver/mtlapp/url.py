from django.conf.urls import url
from mtlapp import views

urlpatterns=[
    url(r'^randomRoll/$', views.randomRollAPI)
]