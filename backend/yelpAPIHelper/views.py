from django.shortcuts import render
import requests
from django.http import JsonResponse
import os

# Create your views here.

def home(request):

    return render(request, 'home.html')


def get_restaurants(request):

    location = request.GET.get('location', 'San Francisco') # Defaults to San Francisco
    latitude = request.GET.get('latitude', 29.7604)
    longitude = request.GET.get('longitude', -95.3698)
    price = request.GET.get('price', 4)
    rating = request.GET.get('rating', 3)
    radius = request.GET.get('radius', 20000)

    headers = {
        'Authorization': f'Bearer {os.environ.get("YELP_API_KEY")}',
    }
    params = {
        'term': 'restaurants',
        'latitude': latitude,
        'longitude': longitude,
        # "location": "Houston",
        'radius': radius,
        'price': price,
        'rating': 3,
        'open_now': True
    }
    response = requests.get('https://api.yelp.com/v3/businesses/search', headers=headers, params=params)
    data = response.json()
    # Process the response data as needed
    return render(request, 'restaurants.html', {'restaurants':data['businesses']})


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

    params = {
        'term': 'restaurants',
        'latitude': latitude,
        'longitude': longitude,
        # "location": "Houston",
        'radius': radius,
        'price': price,
        'rating': 3,
        'open_now': True
    }

    response = requests.get('https://api.yelp.com/v3/businesses/search', headers=headers, params=params)
    data = response.json()
    print(data)
    return JsonResponse(data['businesses'], safe=False)