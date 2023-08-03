from django.urls import path
from .views import home, api_get_restaurants

urlpatterns = [
    path('', home),
    path('get_restaurants', api_get_restaurants)
]
