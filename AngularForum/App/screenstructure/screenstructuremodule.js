var screenstructureModule = angular.module("screenstructureModule", ['ui.router', 'homeModule', 'pascalprecht.translate']);

screenstructureModule.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    /*Routing definition*/
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        //#region routing configuration for root
        .state("root", {
            url: "/",
            abstract: true,
            views: {
                'mainContentView': {
                    templateUrl: 'app/areas/home/views/homeView.html',
                    controller: homeModule.homeController
                }
            }
        })
         .state("login", {
             url: "/login",
             views: {

                 'contentView': {
                     templateUrl: 'app/areas/login/views/loginView.html',
                     controller: screenstructureModule.loginController
                 }
             }
         })
        .state("home", {
            url: "/home",
            views: {

                'mainContentView': {
                    templateUrl: 'app/areas/home/views/homeView.html',
                    controller: homeModule.homeController
                }
            }
        })

}]);