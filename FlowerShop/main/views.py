from rest_framework import generics
from django_filters import rest_framework as filters
from .models import Product
from .serializers import ProductSerializer

class ProductFilter(filters.FilterSet):
    category = filters.NumberFilter(field_name='category_id')

    class Meta:
        model = Product
        fields = ['category']

class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = ProductFilter
    pagination_class = None