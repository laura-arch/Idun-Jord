from django.urls import path
from .views import ShowDetailView, ShowListView

urlpatterns = [
    path('', ShowListView.as_view()),
    path('<str:pk>/', ShowDetailView.as_view())
]
