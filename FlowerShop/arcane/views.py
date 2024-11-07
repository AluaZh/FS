from django.shortcuts import render
from .forms import PreferenceForm
from .models import Flower
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import random

def get_flower_suggestions(preferences):
    # This is a placeholder AI logic. Replace with actual AI or complex matching logic as needed.
    flowers = Flower.objects.filter(
        color=preferences.favorite_color,
        season=preferences.preferred_season
    )
    if not flowers.exists():
        flowers = Flower.objects.all()
    return random.choice(flowers)

def preference_form(request):
    if request.method == 'POST':
        form = PreferenceForm(request.POST)
        if form.is_valid():
            preferences = form.save()
            flower_suggestion = get_flower_suggestions(preferences)
            return render(request, 'arcane/flower_suggestion.html', {'flower': flower_suggestion})
    else:
        form = PreferenceForm()
    return render(request, 'arcane/preference_form.html', {'form': form})

@csrf_exempt
def ai_chatbot(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Simulated chatbot response
        return JsonResponse({"response": f"Based on your input '{data.get('message')}', I suggest looking into roses."})
