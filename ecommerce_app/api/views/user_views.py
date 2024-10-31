from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken

from ecommerce_app.api.serializers import UserRegistrationSerializer


# user registration view
@api_view(['POST'])
def user_register(request):
    serializer = UserRegistrationSerializer(data=request.data)
    data = {}

    if serializer.is_valid():
        user = serializer.save()
        data['username'] = user.username
        data['email'] = user.email
        data['first_name'] = user.first_name
        data['last_name'] = user.last_name

        refresh = RefreshToken.for_user(user)
        data['token'] = {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }
    else:
        data = serializer.errors

    return Response(data)
