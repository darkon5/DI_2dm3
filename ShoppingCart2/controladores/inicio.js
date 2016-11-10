miAppAngular.controller('inicio', function ($scope , $location , carritoDeCompras) {

    
    $scope.productos = [
    {"nombre":"Archivadores", "descripcion": "Archivadores oficina", "precio": 15.5, "imagen": "img/lote1.jpg"},
    {"nombre":"Caja Cuadernos", "descripcion": "Cuadernos en caja", "precio": 18.65,"imagen": "img/lote2.jpg"},
    {"nombre":"Agendas", "descripcion": "Agendas ofinica / escuela", "precio": 20, "imagen": "img/lote3.jpg"}
    ]
    
    $scope.carrito = [];
    
    $scope.comprar = function(item){
        
      
        
        $scope.carrito.push(item);
        
        carritoDeCompras.productos = $scope.carrito;
        
    }
    
    $scope.total = function(){
        
        var total = 0;

        for(item of $scope.carrito){
            
            total += item.precio;
        }
        
        carritoDeCompras.total = total;
        return total;
        
    }
    
    
    
    $scope.finalizar = function(){
        
        $location.path("/confirmacion");
    }
    
    
    
    
    
});