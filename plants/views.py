# from django.shortcuts import render
from telnetlib import STATUS
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PlantSerializer
from .models import Plant


class ShowListView(APIView):
    def get(self, _request):
        plants = Plant.objects.all()
        serialized_plants = PlantSerializer(plants, many=True)
        return Response(serialized_plants.data)

    def post(self, request):
        serialized_plant = PlantSerializer(data=request.data)
        if serialized_plant.is_valid():
            serialized_plant.save()
            return Response(serialized_plant.data)
        return Response(serialized_plant.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class ShowDetailView(APIView):
    def get(self, _request, pk):
        plant = Plant.objects.get(id=pk)
        serialized_plant = PlantSerializer(plant, many=False)
        return Response(serialized_plant.data)

    def put(self, request, pk):
        try:
            plant_to_update = Plant.objects.get(id=pk)
        except Plant.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serialized_plant = PlantSerializer(plant_to_update, data=request.data)
        if serialized_plant.is_valid():
            serialized_plant.save()
            return Response(serialized_plant.data)
        return Response(serialized_plant.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        try:
            plant_to_delete = Plant.objects.get(id=pk)
        except Plant.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        plant_to_delete.delete()
        serialized_plant = PlantSerializer(plant_to_delete)
        return Response(serialized_plant.data)
