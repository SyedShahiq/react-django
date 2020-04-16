from knox.models import AuthToken
from rest_framework import generics, permissions
from rest_framework.response import Response

from .serializers import RegisterSerializer, UserSerializer


class RegistrationApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user).data,
            "token": AuthToken.objects.create(user)[1]
        })
