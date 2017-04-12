homeModule.homeController = ["$scope", "$state", "$location", "$timeout", "languageService", "$rootScope", "$translate",
function ($scope, $state, $location, $timeout, languageService, $rootScope, $translate) {

    // init
    $scope.isIE8 = (navigator.userAgent.indexOf("MSIE 8.0") != -1 || navigator.userAgent.indexOf("MSIE 7.0") != -1 || navigator.userAgent.indexOf("MSIE 6.0") != -1);

}];