from django.contrib import admin
from .models import Flujo, Componente, FraccionesParciales
from .forms import FlujoForms, ComponenteForms

class FlujoAdmin(admin.ModelAdmin):
	form = FlujoForms

class ComponenteAdmin(admin.ModelAdmin):
	form = ComponenteForms

admin.site.register(Flujo)
admin.site.register(Componente)
admin.site.register(FraccionesParciales)

# Register your models here.
