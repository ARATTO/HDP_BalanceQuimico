// JavaScript Document
$(document).on("ready", function(){
					
					/*VARIABLES INICIALES*/
					
					$('#numeroComponentes').val("2");
					var anterior = document.getElementById('numeroComponentes').value;
					
					for (var i = 1; i <= 2; i++) {
								 	
						$("ul.conjunto1").append(
							'<li> <input type="text" size="10"/> <input type="text" value="0.0" /> <label>%</label> <br><br> </li>'	
						);
						
						$("ul.conjunto1 li:last input[type=text]:first").val("C"+i);
						$("ul.conjunto1 li:last input[type=text]:first").attr("name", "nombre"+i );
						$("ul.conjunto1 li:last input[type=text]:first").attr("id", "nombre"+i );
						$("ul.conjunto1 li:last input[type=text]:last").attr("name", "porcentajeFlujo"+i );
						$("ul.conjunto1 li:last input[type=text]:last").attr("id", "porcentajeFlujo"+i );
						
						
						
						$("ul.conjunto2").append(
							'<li> <label></label> <input type="text" value="0.0"/> <label>%</label> <br><br> </li>'
						);
						
						$("ul.conjunto2 li:last label:first").text("C"+i);
						$("ul.conjunto2 li:last input[type=text]:last").attr("name", "porcentajeDestilado"+i );
						$("ul.conjunto2 li:last input[type=text]:last").attr("id", "porcentajeDestilado"+i );
						
						
						
						$("ul.conjunto3").append(
							'<li> <label></label> <input type="text" value="0.0"/> <label>%</label> <br><br> </li>'
						);
						
						$("ul.conjunto3 li:last label:first").text("C"+i);
						$("ul.conjunto3 li:last input[type=text]:last").attr("name", "porcentajeResiduo"+i );
						$("ul.conjunto3 li:last input[type=text]:last").attr("id", "porcentajeResiduo"+i );
						
						

						$("ul.conjunto4").append(
							'<li> <label></label> <input type="text" value="0.0"/> <label>%</label> <br><br> </li>'
						);
						
						$("ul.conjunto4 li:last label:first").text("C"+i);
						$("ul.conjunto4 li:last input[type=text]:last").attr("name", "requerimientoDestilado"+i );
						$("ul.conjunto4 li:last input[type=text]:last").attr("id", "requerimientoDestilado"+i );
						
						
						
						$("ul.conjunto5").append(
							'<li> <label></label> <input type="text" value="0.0"/> <label>%</label> <br><br> </li>'
						);
						
						$("ul.conjunto5 li:last label:first").text("C"+i);
						$("ul.conjunto5 li:last input[type=text]:last").attr("name", "requerimientoResiduo"+i );
						$("ul.conjunto5 li:last input[type=text]:last").attr("id", "requerimientoResiduo"+i );
					}
					
					
		
		
			
			$("input[type=number]").on("click", function(){
				
				var v = document.getElementById('numeroComponentes').value;
				
				if(v!=anterior ){ /*Limitar disparo de evento por click input.number*/
					if(  v<=6 & v>=2   ){ /*Limitar desparo de evento por numero de variables*/

							
							
							if(v > anterior) { /*AGREGAR CAMPO*/
								
									
								$("ul.conjunto1").append(
									'<li> <input type="text" size="10"/> <input type="text" value="0.0" /> <label>%</label> <br><br> </li> '	
								);
								
								$("ul.conjunto1 li:last input[type=text]:first").val("C"+v);
								$("ul.conjunto1 li:last input[type=text]:first").attr("name", "nombre"+v );
								$("ul.conjunto1 li:last input[type=text]:first").attr("id", "nombre"+v );
								$("ul.conjunto1 li:last input[type=text]:last").attr("name", "porcentajeFlujo"+v );
								$("ul.conjunto1 li:last input[type=text]:last").attr("id", "porcentajeFlujo"+v );
								
								
								$("ul.conjunto2").append(
									'<li> <label></label> <input type="text" value="0.0"/> <label>%</label> <br><br> </li>'
								);
								
								$("ul.conjunto2 li:last label:first").text("C"+v);
								$("ul.conjunto2 li:last input[type=text]:last").attr("name", "porcentajeDestilado"+v );
								$("ul.conjunto2 li:last input[type=text]:last").attr("id", "porcentajeDestilado"+v );
								
								
								
								$("ul.conjunto3").append(
									'<li> <label></label> <input type="text" value="0.0"/> <label>%</label> <br><br> </li>'
								);
								
								$("ul.conjunto3 li:last label:first").text("C"+v);
								$("ul.conjunto3 li:last input[type=text]:last").attr("name", "porcentajeResiduo"+v );
								$("ul.conjunto3 li:last input[type=text]:last").attr("id", "porcentajeResiduo"+v );
								
								
								
								$("ul.conjunto4").append(
									'<li> <label></label> <input type="text" value="0.0"/> <label>%</label> <br><br> </li>'
								);
								
								$("ul.conjunto4 li:last label:first").text("C"+v);
								$("ul.conjunto4 li:last input[type=text]:last").attr("name", "requerimientoDestilado"+v );
								$("ul.conjunto4 li:last input[type=text]:last").attr("id", "requerimientoDestilado"+v );
								
								
								
								$("ul.conjunto5").append(
									'<li> <label></label> <input type="text" value="0.0"/> <label>%</label> <br><br> </li>'
								);
								
								$("ul.conjunto5 li:last label:first").text("C"+v);
								$("ul.conjunto5 li:last input[type=text]:last").attr("name", "requerimientoResiduo"+v );
								$("ul.conjunto5 li:last input[type=text]:last").attr("id", "requerimientoResiduo"+v );
								
								anterior++;
							}
							else{ /*ELIMINAR CAMPO*/
								
								$("ul.conjunto1 li:last").remove();
								$("ul.conjunto2 li:last").remove();
								$("ul.conjunto3 li:last").remove();
								$("ul.conjunto4 li:last").remove();
								$("ul.conjunto5 li:last").remove();
								
								anterior--;
								
							}
					}
					else{
						
						$('#numeroComponentes').val(anterior);
						
						alert("El numero de variables permitidas es de 2 a 6");
						
					}
				}
			
			});
			
			
			
			
				//CANVAS
				
				var canvas = document.getElementById("miCanvas");
				
				//Tamaño Lienzo
				canvas.height = 400;
				canvas.width = 320;
				
				var ctx = canvas.getContext("2d");
				
				//Renderizado Inicial
				if(canvas.getContext){
					
					var ctx = canvas.getContext("2d");
					
					
					
					ctx.fillStyle = '#FFFFFF' , 'stroke-width:5';
					ctx.fillRect(110,10,100,100);
					
					ctx.strokeStyle = 'white';
					ctx.strokeRect(109,9,101,101);
					
					
					var img = new Image();
					img.src = "/static/img/prueba5.png";
					
					img.onload = function(){
						
							ctx.drawImage(this, 10, 110, 300,150);
						
					}
					
					ctx.fillStyle = '#FFFFFF';
					ctx.fillRect(5,250,100,100);
					
					ctx.strokeStyle = 'white';
					ctx.lineWidth = 5;
					ctx.strokeRect(4,249,101,101);
					
					
					
					ctx.fillStyle = '#FFFFFF';
					ctx.fillRect(210,250,100,100);
					
					ctx.strokeStyle = 'white';
					ctx.lineWidth = 5;
					ctx.strokeRect(209,249,101,101);
					
				}
				
				
				
				
				
					//input text ENTRADA
					$("#cantidad").change(function(){
							
							pintarEntrada();
							
					});
					
					function pintarEntrada() {
					  		s1=0;
							k1=0;
							y1=110;
							m1=110;
							
							if(s1==0){
								
									var e1 = document.getElementById('cantidad').value;
									
									ctx.fillStyle = '#114454';
									ctx.fillRect(181,71,142,71);
									ctx.fillStyle = '#FFFFFF';
									ctx.font="20px Verdana";
									//ctx.fillText(e1 + " mol/h", 230, 90);
									ctx.fillText(e1 + " mol/h", 180, 140);
									s1=1;
							}
							//fillText(e, 300, 90);

							ctx.fillStyle = '#FFFFFF';
							ctx.fillRect(110,10,100,100);
							
							ctx.strokeStyle = 'white';
							ctx.lineWidth = 5;
							ctx.strokeRect(109,9,101,101);
						
							for(i = 10; i<110; i+=10){
								
								ctx.fillStyle = '#99FF99';
								ctx.fillRect(100,i,50,1);
								ctx.font="10px Verdana";
								ctx.fillText(i+" %", 70, m1);
								m1-=10;
							
							}
							
							//ANIMACION ENTRADA
						
							setInterval(function() {

							   if(y1 <= 10){
							   	   y1 =110;
							   }
							   else{
								   y1 = y1 -1;
							   }
							   					
						  	   k1++;
						   
						   	   if( k1 == 10){
							    	   k1=0;
	
									   ctx.fillStyle = '#277A8C';
									   // Y dibujamos nuestra figura
									   ctx.fillRect(110, y1, 80, 2);
								}
						   		else{
									   ctx.fillStyle = '#54B5BF';
									   // Y dibujamos nuestra figura
									   ctx.fillRect(110, y1, 100, 1);
								}

						}, 1000 / 60);	
					}
							

					//input text DESTILADO
					
					
					function pintarDestilado() {

							s2=0;
							k2=0;
							y2=250;
							m2=350;
							
							ctx.fillStyle = '#FFFFFF';
							ctx.clearRect(5,250,100,100);
							
							if(s2==0){
								
									var e2 = document.getElementById('cantidadDestilado').value;
									var e1 = document.getElementById('cantidad').value;
									
									ctx.fillStyle = '#114454';
									ctx.fillRect(5,360,130,60);
									ctx.fillStyle = '#FFFFFF';
									ctx.font="20px Verdana";
									ctx.fillText(e2 + " mol/h", 10, 380);
									
									e2 = (e2/e1) * 100;
									s2=1;
							}
							//fillText(e, 300, 90);						
							
							ctx.fillStyle = '#FFFFFF';
							ctx.fillRect(5,250,100,100);
							
							ctx.strokeStyle = 'white';
							ctx.lineWidth = 5;
							ctx.strokeRect(4,249,101,101);
						
							for(i = 250; i<350; i+=10){
								
								ctx.fillStyle = '#99FF99';
								
								ctx.fillRect(70,i,50,1);
								ctx.font="10px Verdana";
								ctx.fillText(i-240+" %", 120, m2);
								m2-=10;
							
							}
							
							//ANIMACION DESTILADO
							setInterval(function() {

							   if(y2 <= 250){
							   	   y2 =350;
							   }
							   else{
								   y2 = y2 - 1;
							   }
							   					
						  	   k2++;
						   		
								 
								
								//CONVIERTE A PORCENTAJE
								
						   	   if( k2 == 10){
							    	   k2=0;
									   //CAMBIAR 260 PARA CAMBIAR LIMITE
									   if(y2- 250 > 100-e2 ){
										   		ctx.fillStyle = '#516B8D';
										   }
									   else{
										   		ctx.fillStyle = 'white';
										   }
									   
									   // Y dibujamos nuestra figura
									   ctx.fillRect(5, y2, 80, 2);
								}
						   		else{
									//CAMBIAR 260 PARA CAMBIAR LIMITE
									if(y2-250 > (100-e2)){
										ctx.fillStyle = '#3B7FD9';
									}else{
										ctx.fillStyle = 'white';
										}
									   
									   // Y dibujamos nuestra figura
									   ctx.fillRect(5, y2, 100, 1);
								}

						}, 1000 / 60);	

					  
					}
					
					
					
					
					//input text RESIDUO				
					
					
					function pintarResiduo() {
					  		s3=0;
							k3=0;
							y3=250;
							m3=350;
							
							ctx.fillStyle = '#FFFFFF';
							ctx.clearRect(210,250,100,100);
							
							if(s3==0){
								
									var e3 = document.getElementById('cantidadResiduo').value;
									var e1 = document.getElementById('cantidad').value;
									
									ctx.fillStyle = '#114454';
									ctx.fillRect(200,360,120,60);
									ctx.fillStyle = '#FFFFFF';
									ctx.font="20px Verdana";
									ctx.fillText(e3 + " mol/h", 200, 380);

									e3 = (e3/e1) * 100;
									s3=1;
							}
							//fillText(e, 300, 90);						
							
							ctx.fillStyle = '#FFFFFF';
							ctx.fillRect(210,250,100,100);
						
							for(i = 250; i<350; i+=10){
								
								ctx.fillStyle = '#99FF99';
								
								ctx.fillRect(200,i,50,1);
								ctx.font="10px Verdana";
								ctx.fillText(i-240+" %", 170, m3);
								m3-=10;
							
							}
							
							//ANIMACION RESIDUO
							setInterval(function() {

							   if(y3 <= 250){
							   	   y3 =350;
							   }
							   else{
								   y3 = y3 - 1;
							   }
							   					
						  	   k3++;
							   
							   
								//CONVIERTE A PORCENTAJE
						   
						   	   if( k3 == 10){
							    	   k3=0;
									   
									   if(y3-250 > (100-e3)){
										   		ctx.fillStyle = '#D9910B';
										   }
									   else{
										   		ctx.fillStyle = 'white';
										   }
									   
									   // Y dibujamos nuestra figura
									   ctx.fillRect(210, y3, 80, 2);
								}
						   		else{
									//alert(e2);
									if(y3-250 > (100-e3)){
										ctx.fillStyle = '#516B8D';
									}else{
										ctx.fillStyle = 'white';
										}
									   
									   // Y dibujamos nuestra figura
									   ctx.fillRect(210, y3, 100, 1);
								}

						}, 1000 / 60);
					}
					
					
					
					/////////////////////////////////////////////////////////////////////FIN CANVAS
					
					//CALCULAR NORMAL
					$("#calNormal").on("click", function(){
						
						 var NC = document.getElementById('numeroComponentes').value;
						 NC = parseInt(NC);
	
						 var cantidad = document.getElementById('cantidad').value;
						 cantidad = parseFloat(cantidad);
						 
						 //alert(NC);

						 PF = [];
						 RD = [];
						 RR = [];
						controlFlujo = 0.0;
						controlRequerimientos=0.0;
						controlC = 1;
						CD=0.0;
						CR=0.0;

							for(var i=0; i < NC; i++){

								var e = $("#porcentajeFlujo"+(i+1)).attr("id");
								var e_val = document.getElementById(e).value;
								e_val = parseFloat(e_val);
								
								var eD = $("#porcentajeDestilado"+(i+1)).attr("id");
								var eD_val = document.getElementById(eD).value;
								eD_val = parseFloat(eD_val);

								var eR = $("#porcentajeResiduo"+(i+1)).attr("id");
								var eR_val = document.getElementById(eR).value;
								eR_val = parseFloat(eR_val);
								
								if( (eD_val+eR_val) != 100){
									controlC = 0;
									error_C = i+1;
								}
					
								controlFlujo = controlFlujo + (e_val/100.0);
								PF.push(e_val/100.0);
					
								controlRequerimientos = controlFlujo + (eD_val/100.0);
								RD.push(eD_val/100.0);
					
								controlRequerimientos = controlFlujo + (eR_val/100.0);
								RR.push(eR_val/100.0);
							}
							
							if(cantidad > 0.0 ){
							if(controlC == 1){
							if(controlFlujo == 1){

								for (var i = 0; i < NC ; i++) {
									CD = CD + ( (PF[i]*cantidad)*RD[i] );
									CD = Math.round(CD);
									CR = CR + ( (PF[i]*cantidad)*RR[i] );
									CR = Math.round(CR);
								}

								$("#cantidadDestilado").val(String(CD));
							    $("#cantidadResiduo").val(String(CR));


							    for (var i = 0; i < NC ; i++) {

									PorcD = (((PF[i]*cantidad)*RD[i] )/CD) *100;
									PorcD = Math.round(PorcD);
									PorcR = (((PF[i]*cantidad)*RR[i] )/CR) *100;
									PorcR = Math.round(PorcR);

									$("#requerimientoDestilado"+(i+1)).val(String(PorcD));
							    	$("#requerimientoResiduo"+(i+1)).val(String(PorcR));
								}

								pintarResiduo();
								pintarDestilado();
							}
							else{
								alert("Error en los porcentajes de variables entrada");
							}
						}else{
								alert("Error favor revise los porcentajes de C"+error_C);
							}
						}else{
								alert("Favor introduzca un Flujo de Entrada valido");
							}
						});





						//CALCULAR INVERSO
						$("#calInverso").on("click", function(){

								var CR = document.getElementById('cantidadResiduo').value;
								CR = parseFloat(CR);

								var CD = document.getElementById('cantidadDestilado').value;
								CD = parseFloat(CD);

								var NC = document.getElementById('numeroComponentes').value;
						 		NC = parseInt(NC);

								PF = [];
								RD = [];
								RR = [];
								PD = [];
								PR = [];
								controlC = 1;

								
								
									for (var i = 0; i < NC; i++) {

										var PorcD = $("#requerimientoDestilado"+(i+1)).attr("id");
										var PorcD_val = document.getElementById(PorcD).value;
										PorcD_val = parseFloat(PorcD_val);

										var PorcR = $("#requerimientoResiduo"+(i+1)).attr("id");
										var PorcR_val = document.getElementById(PorcR).value;
										PorcR_val = parseFloat(PorcR_val);


										PD.push(PorcD_val/100);
										PR.push(PorcR_val/100);
										
										if( (PorcD_val+PorcR_val) != 100){
											controlC = 0;
											error_C = i+1;
										}
										
									}
									
									
									
									if(CR > 0.0){
										if(CD > 0.0){
											if(controlC == 1){
											
												cantidad = CR + CD;
												$("#cantidad").val(String(cantidad));
												
												for(i=0; i<NC ; i++){
													
													e  = ( ( (PD[i]*CD) + (PR[i]*CR) ) /cantidad ) * 100;
													e = Math.round(e);
													eD = ( (PD[i]*CD) / ( (PD[i]*CD) + (PR[i]*CR) ) ) * 100;
													eD = Math.round(eD);
													eR = ( (PR[i]*CR) / ( (PD[i]*CD) + (PR[i]*CR) ) ) * 100;
													eR = Math.round(eR);
													
													$("#porcentajeFlujo"+(i+1)).val(String(e));
													$("#porcentajeDestilado"+(i+1)).val(String(eD));
													$("#porcentajeResiduo"+(i+1)).val(String(eR));
												
												}
											
			
												pintarEntrada();
												pintarResiduo();
												pintarDestilado();
											
											}else{
													alert("Error favor revise los porcentajes de C"+error_C);
												}
										}else{
											alert("Error introduzca un valor de Destilado valido");
											}
									}else{
											alert("Error introduzca un valor de Residuo valido");
										}
	
						});



				
				
				
			
});
