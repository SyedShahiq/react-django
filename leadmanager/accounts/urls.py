from django.urls import include, path
from knox import views as knox_views

from .api import RegistrationApi, LoginApi

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegistrationApi.as_view()),
    path('api/auth/login', LoginApi.as_view())
]
