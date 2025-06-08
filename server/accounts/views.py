from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
import logging

logger = logging.getLogger(__name__)

# Create your views here.

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    try:
        username = request.data.get('username')
        password = request.data.get('password')
        
        if not username or not password:
            logger.warning("Tentative de connexion sans username ou password")
            return Response({
                'status': 'error',
                'message': 'Username and password are required'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        logger.info(f"Tentative de connexion pour l'utilisateur: {username}")
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            logger.info(f"Connexion réussie pour l'utilisateur: {username}")
            return Response({
                'status': 'success',
                'message': 'Login successful',
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email
                },
                'redirect_url': '/'  # Redirection vers la page d'accueil (portfolio)
            })
        else:
            logger.warning(f"Échec de connexion pour l'utilisateur: {username}")
            return Response({
                'status': 'error',
                'message': 'Invalid credentials'
            }, status=status.HTTP_401_UNAUTHORIZED)
            
    except Exception as e:
        logger.error(f"Erreur lors de la tentative de connexion: {str(e)}")
        return Response({
            'status': 'error',
            'message': 'An error occurred during login'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
