from django.contrib import admin
from django.urls import path, include
from leads.urls import router
from frontend.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',index,name="index-page"),
    path('', include(router.urls), name="lead-api"),
    path('', include('accounts.urls'), name="registration-api"),
]
