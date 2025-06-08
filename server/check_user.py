import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')
django.setup()

from django.contrib.auth import get_user_model, authenticate

User = get_user_model()

# Vérifier si l'utilisateur existe
username = "pavel237"
password = "pavel1904"

print("\nVérification de l'utilisateur :")
print("-" * 50)

# Vérifier l'existence de l'utilisateur
try:
    user = User.objects.get(username=username)
    print(f"Utilisateur trouvé :")
    print(f"Username: {user.username}")
    print(f"Email: {user.email}")
    print(f"Date d'inscription: {user.date_joined}")
    print(f"Est actif: {user.is_active}")
    print(f"Est staff: {user.is_staff}")
    print(f"Est superuser: {user.is_superuser}")
except User.DoesNotExist:
    print(f"L'utilisateur {username} n'existe pas dans la base de données")

# Tester l'authentification
auth_user = authenticate(username=username, password=password)
if auth_user:
    print("\nAuthentification réussie !")
else:
    print("\nÉchec de l'authentification") 