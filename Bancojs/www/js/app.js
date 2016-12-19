// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var loginSheet = {
  username: "asdad",
  passcode: "wawa"
}

var dinMunny = "";
var posiCliente = 0;
var trades = [];

angular.module('starter', ['ionic'])


.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('loginCtrl', function ($scope, $http) {
  // var showSpinner = false;
  $scope.clientes = [{
    name: "Emil",
    cuenta: "111",
    importe: [20000]
  }, {
    name: "Tobias",
    cuenta: "222",
    importe: [2000]
  }, {
    name: "Linus",
    cuenta: "333",
    importe: [500]
  }, {
    name: "Rufus",
    cuenta: "444",
    importe: [500]
  }];

  //   function SettingsController($scope) {
  //   $scope.obj = {
  //     value1: 'somevalue',
  //     value2: false
  //   }

  //   $scope.checkValue1 = function() {
  //     return $scope.obj.value1 === 'someothervalue';
  //   }
  // }

  // $scope.showing = true;
  $scope.click = function () {
    $scope.showing = false;
    if ($scope.ctrl.user.pass === undefined) {
      $scope.ctrl.user.pass = ""
    }
    $scope.showSpinner = true;


    var distansia = $scope.clientes.length;
    while (distansia--) {
      if ($scope.clientes[distansia].name === $scope.ctrl.user.name && $scope.clientes[distansia].cuenta === $scope.ctrl.user.pass) {
        $scope.hideform = true;
        $scope.showInfo = true;
        // $scope.ctrl.info.name.write('wololo');// = $scope.clientes[distansia].name;
        $scope.namer = $scope.clientes[distansia].name;
        dinMunny = $scope.clientes[distansia].importe;
        posiCliente = distansia;
        $scope.trade = $scope.clientes[distansia].importe;
        $scope.cashr = $scope.trade[$scope.trade.length - 1];
        break;
        // $scope.showSpinner = false;
      }
    }
    if (distansia < 0) {
      alert("fin");
      $scope.showSpinner = false;
    }

    // alert('User: ' + $scope.ctrl.user.name + "\nPass: " + $scope.ctrl.user.pass);

  }

  $scope.register = function () {
    $scope.clientes[$scope.clientes.length] = {
      name: $scope.ctrl.user.name,
      cuenta: $scope.ctrl.user.pass,
      importe: [0]
    }
    alert("Usuario registrado!");
  }

  $scope.masMunny = function () {
    if ($scope.meterr) {
      $scope.trade.push($scope.trade[$scope.trade.length - 1] + $scope.meterr);
      $scope.meterr = "";
      if ($scope.trade[$scope.trade.length - 1] < 0) {
        $scope.negativ = true
      } else {
        $scope.negativ = false
      }
      $scope.cashr = $scope.trade[$scope.trade.length - 1];
    }
  }
  $scope.menosMunny = function () {
    if ($scope.meterr) {
      $scope.trade.push($scope.trade[$scope.trade.length - 1] - $scope.meterr);
      $scope.meterr = "";
      if ($scope.trade[$scope.trade.length - 1] < 0) {
        $scope.negativ = true
      } else {
        $scope.negativ = false
      }
      $scope.cashr = $scope.trade[$scope.trade.length - 1];
    }
  }

  $scope.hideFrm = function () {
    alert();
    dinamo = "dinaMO!";
  }
});
