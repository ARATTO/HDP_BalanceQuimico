from django.conf.urls import patterns, url
from balance import views
from .views import index,index2,index4,componentes,resultados


urlpatterns = patterns('',
                      # url(r'^$', views.first_view, name='first-view'),
			#url(r'^quimica/$',views.category, name = 'category-list'),
			#url(r'^quimica2/$',views.category2, name = 'category2-list'),


			#url(r'^$', index.as_view(), name= "principal"),
			#url(r'^$', 'balance.views.index4'),
			url(r'^$', 'balance.views.componentes'),
			url(r'^resultado.html/$', 'balance.views.resultados',name="resultados"),
			#url(r'^resultado.html/$', index2.as_view(), name="resultados"),
                       )
