from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path
from ecommerce_app.api.views import user_views as views


urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.user_register, name='user_register'),
]
