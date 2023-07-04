from django.urls import path
from .views import home, api_get_restaurants

urlpatterns = [
    path('', home),
    path('restaurants', api_get_restaurants)
]
