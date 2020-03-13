from django.contrib import admin
from django.urls import path, include
from leads.urls import router
from frontend.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',index,name="index-page"),
    path('api', include(router.urls), name="lead-api"),
]
