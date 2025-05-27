from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views
from accounts import views  # Remplace "mainapp" par le nom de ton app si différent
from django.http import JsonResponse

def home_view(request):
    return JsonResponse({
        'status': 'success',
        'message': 'API is running',
        'endpoints': {
            'login': '/api/login/',
            'logout': '/logout/',
            'admin': '/admin/'
        }
    })

urlpatterns = [
    path('', home_view, name='home'),  # Route par défaut
    path('admin/', admin.site.urls),
    path('api/login/', views.login_view, name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    # path('dashboard/', views.dashboard_view, name='dashboard'),  # Désactivé temporairement
]
