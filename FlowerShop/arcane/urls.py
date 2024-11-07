from django.urls import path
from . import views

urlpatterns = [
    path('preference_form/', views.preference_form, name='preference_form'),
    path('api/ai_chatbot/', views.ai_chatbot, name='ai_chatbot'),
]
