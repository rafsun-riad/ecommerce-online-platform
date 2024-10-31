from django.urls import path
from ecommerce_app.api.views import product_views as views


urlpatterns = [
    path('category/', views.get_all_categories, name='all-category'),

    path('category/create/', views.create_category, name='create-category'),

    path('category/<str:id>/', views.get_category_by_id, name='get-category-by-id'),


    path('category/edit/<str:id>/', views.update_category, name='update-category'),

    path('category/delete/<str:id>/',
         views.delete_category, name='delete-category'),

    path('warehouse/', views.get_all_warehouse, name='all-warehouse'),

    path('warehouse/create/', views.create_warehouse, name='create-warehouse'),

    path('warehouse/<str:id>/', views.get_warehouse_by_id,
         name='get-warehouse-by-id'),

    path('warehouse/edit/<str:id>/',
         views.update_warehouse, name='update-warehouse'),

    path('warehouse/delete/<str:id>/',
         views.delete_warehouse, name='delete-warehouse'),

    path('product/', views.get_all_product, name='all-product'),

    path('product/create/', views.create_product, name='create-product'),

    path('product/<str:id>/', views.get_product_by_id, name="get-product-by-id"),

    path('product/edit/<str:id>/', views.update_product, name='update-product'),

    path('product/delete/<str:id>/', views.delete_product, name='delete-product'),

    path('product/<str:id>/stock/edit/',
         views.update_stock_by_product, name='update-stock')
]
