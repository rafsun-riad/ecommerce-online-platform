from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User

from ecommerce_app.models import Product, ProductImage, Category, Warehouse, Stock


# serialzier for custom token claims
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username
        token['email'] = user.email
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name

        return token


# serialzer for user registration
class UserRegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        return user


# category serializer
class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


# warehouse serializer
class WarehouseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Warehouse
        fields = '__all__'


# stock serializer
class StockSerializer(serializers.ModelSerializer):
    warehouse = WarehouseSerializer(many=True, read_only=True)

    class Meta:
        model = Stock
        fields = '__all__'


# product image serializer
class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImage
        fields = '__all__'


# product serializer
class ProductSerialzer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)
    stock = StockSerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
