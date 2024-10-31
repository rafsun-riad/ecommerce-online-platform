from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from django.utils.text import slugify

from ecommerce_app.models import Category, Warehouse, Stock, Product, ProductImage
from ecommerce_app.api.serializers import (
    CategorySerializer, WarehouseSerializer, StockSerializer, ProductSerialzer, ProductImageSerializer,)


# all categories view
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_categories(request):
    try:
        categories = Category.objects.all()
        serialzer = CategorySerializer(categories, many=True)
        return Response(serialzer.data, status=status.HTTP_200_OK)

    except Category.DoesNotExist:
        return Response({'message': 'No Category found!'}, status=status.HTTP_204_NO_CONTENT)


# get category by id view
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_category_by_id(request, id):
    try:
        category = Category.objects.get(pk=id)
        serializer = CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response({"message": "Can not find the category!"}, status=status.HTTP_404_NOT_FOUND)


# category create view
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_category(request):

    name = request.data['name']
    slug = slugify(request.data['name'])

    try:

        category = Category.objects.create(
            name=name,
            slug=slug,
        )
        serialzer = CategorySerializer(category)
        return Response(serialzer.data, status=status.HTTP_201_CREATED)

    except:
        return Response({'message': 'Can not create category!'}, status=status.HTTP_400_BAD_REQUEST)


# update category view
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_category(request, id):

    try:
        category = Category.objects.get(pk=id)

        category.name = request.data['name']
        category.slug = slugify(request.data['name'])

        category.save()
        serializer = CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except:
        return Response({'message': 'Can not find category to update!'}, status=status.HTTP_404_NOT_FOUND)


# delete category view
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_category(request, id):
    try:
        category = Category.objects.get(pk=id)
        if not category:
            raise Exception

        if category.delete():
            return Response({'message': 'Category deleted!'}, status=status.HTTP_204_NO_CONTENT)

    except:
        return Response({'message': 'Category does not exist!'}, status=status.HTTP_400_BAD_REQUEST)


# all warehouse view
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_warehouse(request):
    try:
        warehouse = Warehouse.objects.all()
        serializer = WarehouseSerializer(warehouse, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response({'message': 'No warehouse found!'}, status=status.HTTP_204_NO_CONTENT)


# get warehouse by id view
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_warehouse_by_id(request, id):
    try:
        warehouse = Warehouse.objects.get(pk=id)
        serializer = WarehouseSerializer(warehouse)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response({"message": "Can not find the warehouse!"}, status=status.HTTP_404_NOT_FOUND)


# create warehouse view
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_warehouse(request):

    name = request.data['name']
    location = request.data['location']
    try:

        warehouse = Warehouse.objects.create(
            name=name,
            location=location
        )
        serializer = WarehouseSerializer(warehouse)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    except:
        return Response({'message': 'Can not create warehouse!'}, status=status.HTTP_400_BAD_REQUEST)


# update warehouse view
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_warehouse(request, id):
    try:
        warehouse = Warehouse.objects.get(pk=id)

        if not warehouse:
            raise Exception

        warehouse.name = request.data['name']

        warehouse.location = request.data['location']

        warehouse.save()
        serializer = WarehouseSerializer(warehouse)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except:
        return Response({'message': 'This warehouse does not exist'}, status=status.HTTP_400_BAD_REQUEST)


# delete warehouse view
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_warehouse(request, id):
    try:
        warehouse = Warehouse.objects.get(pk=id)
        if not warehouse:
            raise Exception
        if warehouse.delete():
            return Response({'message': 'Warehouse deleted!'}, status=status.HTTP_204_NO_CONTENT)
    except:
        return Response({'message': 'Warehouse does not exist!'}, status=status.HTTP_400_BAD_REQUEST)


# all product view
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_product(request):
    try:
        product = Product.objects.all()
        serializer = ProductSerialzer(product, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response({'message': "No product found!"}, status=status.HTTP_400_BAD_REQUEST)


# get product by id view
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_product_by_id(request, id):
    try:
        product = Product.objects.get(pk=id)
        serializer = ProductSerialzer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response({"message": "Can not find the product"}, status=status.HTTP_404_NOT_FOUND)


# create product view
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_product(request):
    slug = slugify(request.data['name'])
    try:

        category = Category.objects.get(pk=request.data['categoryId'])
        warehouse = Warehouse.objects.get(pk=request.data['warehouseId'])

        product = Product.objects.create(
            name=request.data['name'],
            slug=slug,
            category=category,
            description=request.data['description'],
            price=request.data['price'],

        )

        stock = Stock.objects.create(
            product=product,
            isStock=True,
            countInStock=request.data['countInStock'],
            quantity=request.data['quantity'],
            warehouse=warehouse,
            notes=request.data['notes']
        )

        images = request.FILES.getlist('images')
        for image in images:
            product_image = ProductImage.objects.create(
                product=product,
                image=image,
            )
        serializer = ProductSerialzer(product)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    except:
        return Response({'message': 'Can not create product'}, status=status.HTTP_400_BAD_REQUEST)


# update product view
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_product(request, id):
    try:
        product = Product.objects.get(pk=id)
        if not product:
            raise Exception
        if request.data['name'] != '':
            product.name = request.data['name']
            product.slug = slugify(request.data['name'])
            product.save()
            serializer = ProductSerialzer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Please provide valid data!'}, status=status.HTTP_400_BAD_REQUEST)

    except:
        return Response({'message': 'No product found!'}, status=status.HTTP_400_BAD_REQUEST)


# delete product view
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_product(request, id):
    try:
        product = Product.objects.get(pk=id)
        if not product:
            raise Exception
        if product.delete():
            return Response({'message': 'Product deleted!'}, status=status.HTTP_204_NO_CONTENT)

    except:
        return Response({'message': 'Can not delete product!'}, status=status.HTTP_400_BAD_REQUEST)


# stock update view
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_stock_by_product(request, id):
    try:
        stock = Stock.objects.get(product=id)
        if not stock:
            raise Exception
        stock.isStock = request.data['isStock']
        stock.countInStock = request.data['countInStock']
        stock.quantity = request.data['quantity']
        stock.save()
        serializer = StockSerializer(stock)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except:
        return Response({'message': 'Stock can not updated!'}, status=status.HTTP_400_BAD_REQUEST)
