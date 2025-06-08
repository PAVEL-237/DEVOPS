import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()
users = User.objects.all()

print("\nListe des utilisateurs :")
print("-" * 50)
for user in users:
    print(f"Username: {user.username}")
    print(f"Email: {user.email}")
    print(f"Date d'inscription: {user.date_joined}")
    print("-" * 50) 