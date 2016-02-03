from django import forms
from .models import Componente,Flujo
#from django.contrib.auth.models import Flujo

class FlujoForms(forms.ModelForm):
	class Meta:
		model = Flujo
		#fields = ('numeroComponentes', 'cantidad', 'cantidadResiduo', 'cantidadDestilado')


class ComponenteForms(forms.ModelForm):
	class Meta:
		model = Componente
		exclude = ('flujo',)
		#fields =  ['nombre','porcentajeFlujo' ,'porcentajeDestilado' ,'porcentajeResiduo','requerimientoResiduo','requerimientoDestilado','flujo']
