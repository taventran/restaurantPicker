from django.shortcuts import render
import requests
from django.http import JsonResponse
import os

# Create your views here.

def home(request):

    return render(request, 'home.html')

# def get_restaurants(request):
#     headers = {
#         'Authorization': f'Bearer  + {os.environ.get("YELP_API_KEY")}',
#     }
#     params = {
#         'term': 'restaurants',
#         'location': 'San Francisco',
#     }
#     response = requests.get('https://api.yelp.com/v3/businesses/search', headers=headers, params=params)
#     data = response.json()
#     # Process the response data as needed
#     return render(request, 'restaurants.html', {'restaurants': data['businesses']})


def api_get_restaurants(request):
    headers = {
        'Authorization': f'Bearer {os.environ.get("YELP_API_KEY")}',
    }
    params = {
        'term': 'restaurants',
        'location': 'San Francisco',
    }
    response = requests.get('https://api.yelp.com/v3/businesses/search', headers=headers, params=params)
    data = response.json()
    return JsonResponse(data, safe=True)