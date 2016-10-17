aplicacion.controller('ExamenController',['$scope',function($scope){
	
	$scope.imgSlider = [
		{
			img:'img/slider/PremioMSFT.jpg'
		},
		{
			img:'img/slider/centroCapacitacion.jpg'
		},
		{
			img:'img/slider/ServiciosAdministrados.jpg'
		},
		{
			img:'img/slider/TalentoHumano.jpg'
		}
	]
	$scope.servicios = [
		{
			icono:'img/servicios/servicios_administrativos.png',
			nombre:'SERVICIOS ADMINISTRATIVOS'
		},
		{
			icono:'img/servicios/gestion_documental.png',
			nombre:'GESTION DOCUMENTAL (ECM)-IRM (RIGHTS MANAGEMENT)'
		},
		{
			icono:'img/servicios/clima_laboral.png',
			nombre:'CLIMA LABORAL'
		},
		{
			icono:'img/servicios/capacitacion.png',
			nombre:'CAPACITACIÓN'
		}
	]
	$scope.noticias = [
		{
			img:'img/noticias/Infografia_SIKA_AG_Web.png',
			titulo:'LAS CLAVES DE UN RECLUTAMIENTO GLOBAL EXITOSO',
			contenido: 'Este es el contenido para las claves de un reclutamiento global exitoso'
		},
		{
			img:'img/noticias/com_por_gen_home.png',
			titulo:'LAS CLAVES DE UN RECLUTAMIENTO GLOBAL EXITOSO',
			contenido: 'Este es el contenido de los SERVICIOS ADMINISTRATIVOS'
		}
	]

	$scope.mostrarServicio = function(){
		$scope.servicios.push({icono:$scope.nuevoIcono, nombre:$scope.nuevoNombre});
		
		
	}
    /*$scope.desplegar = function(index){
        if($scope.albergues[index].valor == true){
            $scope.albergues[index].valor= false;   
        }else{
            $scope.albergues[index].valor= true;    
        }
        
        console.log($scope.albergues[index].valor);
        console.log($scope.albergues[index].nombre);
        console.log(index)
        $scope.alb = $scope.albergues[index];
        console.log($scope.alb);
    }*/
	
	
}]);