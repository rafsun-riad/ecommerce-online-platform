from django.contrib import admin
from .models import Product, Category, Stock, Warehouse, ProductImage

# Register your models here.

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Stock)
admin.site.register(Warehouse)
admin.site.register(ProductImage)
