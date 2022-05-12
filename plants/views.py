# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PlantSerializer
from .models import Plant


class ShowListView(APIView):
    def get(self, _request):
        plants = Plant.objects.all()
        serialized_plants = PlantSerializer(plants, many=True)
        return Response(serialized_plants.data)


class ShowDetailView(APIView):
    def get(self, _request, pk):
        plant = Plant.objects.get(id=pk)
        serialized_plant = PlantSerializer(plant, many=False)
        return Response(serialized_plant.data)
