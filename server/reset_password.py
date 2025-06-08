import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

# Informations de l'utilisateur
username = "pavel237"
new_password = "pavel1904"  # Le nouveau mot de passe sera le même que l'ancien

try:
    # Récupérer l'utilisateur
    user = User.objects.get(username=username)
    
    # Réinitialiser le mot de passe
    user.set_password(new_password)
    user.save()
    
    print("\nMot de passe réinitialisé avec succès !")
    print(f"Username: {user.username}")
    print("Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.")
    
except User.DoesNotExist:
    print(f"Erreur : L'utilisateur {username} n'existe pas.")
except Exception as e:
    print(f"Une erreur s'est produite : {str(e)}") 