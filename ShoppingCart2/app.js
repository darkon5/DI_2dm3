var miAppAngular = angular.module('navegacion', ['ngRoute'] );

miAppAngular.config( [ '$routeProvider' , function($routeProvider){
    
    $routeProvider.when('/' , {      
        templateUrl: 'plantillas/inicio.html',
        controller: 'inicio'
    })
    .when('/confirmacion', {
        templateUrl: 'plantillas/confirmacion.html',
        controller: 'confirmacion'
    })
    .otherwise({
        
        redirectTo: '/'
        
    })
    
} ] )