import os
import django
import requests
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')
django.setup()

from django.contrib.auth import authenticate, login
from django.test import Client

def test_direct_auth():
    print("\nTest d'authentification directe :")
    print("-" * 50)
    user = authenticate(username="pavel237", password="pavel1904")
    if user:
        print("✅ Authentification directe réussie")
    else:
        print("❌ Échec de l'authentification directe")

def test_api_login():
    print("\nTest de connexion via l'API :")
    print("-" * 50)
    
    # Test avec l'API
    url = "http://localhost:8000/api/login/"  # Ajustez l'URL si nécessaire
    data = {
        "username": "pavel237",
        "password": "pavel1904"
    }
    headers = {
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.post(url, json=data, headers=headers)
        print(f"Status code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            print("✅ Connexion API réussie")
        else:
            print("❌ Échec de la connexion API")
    except Exception as e:
        print(f"❌ Erreur lors de la connexion API: {str(e)}")

def test_django_client():
    print("\nTest avec le client Django :")
    print("-" * 50)
    client = Client()
    response = client.post('/api/login/', {
        'username': 'pavel237',
        'password': 'pavel1904'
    })
    print(f"Status code: {response.status_code}")
    print(f"Response: {response.content.decode()}")
    
    if response.status_code == 200:
        print("✅ Connexion via client Django réussie")
    else:
        print("❌ Échec de la connexion via client Django")

if __name__ == "__main__":
    test_direct_auth()
    test_api_login()
    test_django_client() 