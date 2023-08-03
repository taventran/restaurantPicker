from django.shortcuts import render
import requests
from django.http import JsonResponse
import os
from random import randint

# Create your views here.

def home(request):

    return render(request, 'home.html')

def api_get_restaurants(request):
    headers = {
        'Authorization': f'Bearer {os.environ.get("YELP_API_KEY")}',
    }
    location = request.GET.get('location', 'San Francisco') # Defaults to San Francisco
    latitude = request.GET.get('latitude', 29.7604)
    longitude = request.GET.get('longitude', -95.3698)
    price = request.GET.get('price', 2)
    rating = request.GET.get('rating', 3)
    radius = request.GET.get('radius', 20000)
    categories = request.GET.get('categories', 'chinese')
    params = {
        'term': 'restaurants',
        'latitude': latitude,
        'longitude': longitude,
        'categories': categories,
        'radius': radius,
        'price': price,
        'rating': rating,
        'open_now': True
    }

    response = requests.get('https://api.yelp.com/v3/businesses/search', headers=headers, params=params)
    data = response.json()

    amountOfRestaurants = len(data['businesses'])

    if (amountOfRestaurants == 0):
        return JsonResponse('NOTHING', safe = False)


    index = randint(0, amountOfRestaurants -  1)

    restaurant = (data['businesses'][index])


    return JsonResponse(restaurant['name'], safe=False)


