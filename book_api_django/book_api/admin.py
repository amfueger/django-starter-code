from django.contrib import admin
from .models import Book
# Register your models here.
## What this is doing is allowing you to edit the
## Book model from the admin app
admin.site.register(Book)
