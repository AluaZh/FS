from django.db import models

class Flower(models.Model):
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=50)
    season = models.CharField(max_length=50)
    description = models.TextField()
    
    def __str__(self):
        return self.name

class UserPreference(models.Model):
    hobby = models.CharField(max_length=100)
    favorite_color = models.CharField(max_length=50)
    preferred_season = models.CharField(max_length=50)
    arrangement_style = models.CharField(max_length=100, blank=True, null=True)  # E.g., "Romantic," "Modern," etc.
    bouquet_size = models.CharField(max_length=50, blank=True, null=True)        # E.g., "Small," "Medium," "Large"
    occasion = models.CharField(max_length=100, blank=True, null=True)           # E.g., "Birthday," "Anniversary," etc.
    preferred_scent = models.CharField(max_length=100, blank=True, null=True)    # E.g., "Sweet," "Fresh," "Woody"
    special_notes = models.TextField(blank=True, null=True)


    def __str__(self):
        return f"{self.hobby} - {self.favorite_color} - {self.preferred_season}"

