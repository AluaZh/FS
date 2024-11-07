from django import forms
from .models import UserPreference

class PreferenceForm(forms.ModelForm):
    class Meta:
        model = UserPreference
        fields = [
            'hobby', 'favorite_color', 'preferred_season', 'arrangement_style',
            'bouquet_size', 'occasion', 'preferred_scent', 'special_notes'
        ]
        widgets = {
            'hobby': forms.TextInput(attrs={'placeholder': 'Enter her hobby (e.g., reading, hiking)'}),
            'favorite_color': forms.TextInput(attrs={'placeholder': 'Favorite color (e.g., blue, red)'}),
            'preferred_season': forms.TextInput(attrs={'placeholder': 'Preferred season (e.g., spring, winter)'}),
            'arrangement_style': forms.TextInput(attrs={'placeholder': 'Bouquet style (e.g., romantic, modern)'}),
            'bouquet_size': forms.TextInput(attrs={'placeholder': 'Bouquet size (e.g., small, medium, large)'}),
            'occasion': forms.TextInput(attrs={'placeholder': 'Occasion (e.g., birthday, anniversary)'}),
            'preferred_scent': forms.TextInput(attrs={'placeholder': 'Preferred scent (e.g., sweet, fresh)'}),
            'special_notes': forms.Textarea(attrs={'placeholder': 'Any special notes or requests'}),
        }
