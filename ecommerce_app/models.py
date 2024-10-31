from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=250, null=True, blank=True)
    slug = models.SlugField(max_length=300, null=True, blank=True, unique=True)

    def __str__(self):
        return self.name


class Warehouse(models.Model):
    name = models.CharField(max_length=250, null=True, blank=True)
    location = models.CharField(
        max_length=250, null=True, blank=True, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=250, null=True, blank=True)
    slug = models.SlugField(max_length=300, null=True, blank=True, unique=True)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, null=True, related_name='product')
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.name


class Stock(models.Model):
    product = models.OneToOneField(
        Product, on_delete=models.CASCADE, blank=True, null=True, related_name='stock')
    isStock = models.BooleanField(default=False)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    quantity = models.IntegerField(null=True, blank=True, default=0)
    warehouse = models.ForeignKey(
        Warehouse, on_delete=models.SET_NULL, related_name='stock', null=True, blank=True)
    notes = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.product.name} | {self.warehouse.name} | {self.countInStock}"


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(
        default='/placeholder.jpg', null=True, blank=True)

    def __str__(self):
        return self.product.name
