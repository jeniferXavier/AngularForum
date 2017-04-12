var app = angular.module("app", ['screenstructureModule']);
app.config(function ($httpProvider) {
  //  $urlRouterProvider.otherwise("/home");

  //  $stateProvider
  //.state("home", {
  //    url: "/home",
  //    templateUrl: "views/home.html",
  //    controller: "homeController",
  //})

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
