from django.shortcuts import render,redirect
from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.core.context_processors import csrf
from balance.models import Flujo, Componente
from django.views.generic import TemplateView
from django.views.generic import CreateView
from django.core.urlresolvers import reverse_lazy
from .forms import FlujoForms, ComponenteForms
from django.core import serializers


class index(CreateView):
	template_name = 'balance/index.html'
	for i in range(2):
		if i==0:
			model = Flujo

		if i ==1:
			model = Componente


	success_url = reverse_lazy('principal')


def componentes(request):
	if request.method =="GET":
		return render(request, 'balance/index.html')   
	elif request.method=="POST":
		f = Flujo()
		f.numeroComponentes = request.POST["numeroComponentes"]
		f.cantidad = request.POST["cantidad"]
		f.cantidadResiduo = request.POST["cantidadResiduo"]
		f. cantidadDestilado = request.POST["cantidadDestilado"]
		f.save()

		control = int(f.numeroComponentes)

		for i in range(control):

			K = str(i+1)

			c = Componente()
			c.flujo = f
			c.nombre = request.POST["nombre"+K]
			c.porcentajeFlujo = request.POST["porcentajeFlujo"+K]
			c.porcentajeDestilado = request.POST["porcentajeDestilado"+K]
			c.porcentajeResiduo =  request.POST["porcentajeResiduo"+K]
			c.requerimientoResiduo = request.POST["requerimientoResiduo"+K]
			c.requerimientoDestilado = request.POST["requerimientoDestilado"+K]
			c.save()

		return render(request, 'balance/index.html')

def resultados(request):
	flu = Flujo.objects.all()
	for i in flu:
		ultimo = i.id
  
	return render(request, 'balance/resultado.html', {'componentes':Componente.objects.all(), 'flujos':Flujo.objects.all(),'ultimo':ultimo })

def index4(request):
		return render(request, 'balance/index.html')


class index2(CreateView):
	template_name = 'balance/resultado.html'
	model = Componente
