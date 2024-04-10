from django.db import models
from pet.models import Pet
from django.contrib.auth import get_user_model
User=get_user_model()
# Create your models here.

class Activity(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    pet=models.ForeignKey(Pet,on_delete=models.CASCADE)
    options=(
        ("activity-placed","activity-placed"),
        ("on-transit","on-transit"),
        ("activity-cancelled","activity-cancelled"),
        ("activity-delivered","activity-delivered")
    )
    status=models.CharField(max_length=30,choices=options,default="activity-placed")
    activityed_date=models.DateTimeField(auto_now_add=True)
    leave_comment=models.CharField(max_length=300,default="address")
    payment_options=(
        ("Pal","Pal"),
        ("play-date","play-date"),
        ("transfer","transfer")
    )
    multiple_choice=models.CharField(max_length=50,choices=payment_options,default="Pal")

    def __str__(self) -> str:
        return self.pet.name