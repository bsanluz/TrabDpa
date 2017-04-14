var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
  .when("/", {
    templateUrl : "capa.html"
  })
  .when("/p1", {
    templateUrl : "p1.html",
    controller : "albumCtrl"
  })
  .when("/p2", {
    templateUrl : "p2.html"
  })
  .otherwise({
    template : "<b>Opção inválida!</b>"
  });
});


