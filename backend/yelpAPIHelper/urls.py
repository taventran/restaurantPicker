from django.urls import path
from .views import home, get_restaurants, api_get_restaurants

urlpatterns = [
    path('', home),
    path('restaurants', get_restaurants),
    path('get_restaurants', api_get_restaurants)
]
