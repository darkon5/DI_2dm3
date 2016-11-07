// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {
  // el estadop del template 
  $stateProvider.state('lista', {
    url:'/lista',
    templateUrl:'template/lista.html',
    controller: 'listaCtrl'
  });

  //el estado del templates para la edicion
  $stateProvider.state('edicion',{
    url:'/edicion/:id',
    templateUrl:'template/edicion.html',
    controller: 'edicionCtrl'
  });

  $urlRouterProvider.otherwise('/lista')
});

//cpntrolador para la lista

app.controller('listaCtrl', function($scope) {
  $scope.notas = [
    {id: '1', titulo: 'nota 1', descripcion: 'primera nota'},
    {id: '2', titulo: 'nota 2', descripcion: 'segunda nota'},
    {id: '3', titulo: 'nota 3', descripcion: 'tercera nota'},
    {id: '4', titulo: 'nota 4', descripcion: 'cuarta nota'},
    {id: '5', titulo: 'nota 5', descripcion: 'quinta nota'},
    {id: '6', titulo: 'nota 6', descripcion: 'sexta nota'},
  ];
});

//controlador para la edicion

app.controller('edicionCtrl', function($scope, $state) {
  $scope.id = $state.params.id;
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
