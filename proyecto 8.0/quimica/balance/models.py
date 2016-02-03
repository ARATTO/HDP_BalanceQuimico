from django.db import models
from django.contrib import admin

# Create your models here.

class Flujo(models.Model):
	numeroComponentes = models.IntegerField()
	cantidad = models.FloatField()
	cantidadResiduo = models.FloatField()
	cantidadDestilado = models.FloatField()
	

class Componente(models.Model):
	nombre = models.CharField(max_length=15)
	porcentajeFlujo = models.FloatField()
	porcentajeDestilado = models.FloatField()
	porcentajeResiduo = models.FloatField()
	requerimientoResiduo = models.FloatField()
	requerimientoDestilado = models.FloatField()
	flujo = models.ForeignKey(Flujo)
	
	def __str__(self):
	        return self.nombre

class FraccionesParciales(models.Model):
	flujo = models.ForeignKey(Flujo)

	def resolverNormal(self,a):
		print (a)

#admin.site.register(Flujo)
#admin.site.register(Componente)
#admin.site.register(FraccionesParciales)

