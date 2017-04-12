screenstructureModule.loginController = ["$scope", "$state", "$location", "$timeout", "$rootScope", "$translate",
function ($scope, $state, $location, $timeout, $rootScope, $translate) {
    // init
    //$scope.isIE8 = (navigator.userAgent.indexOf("MSIE 8.0") != -1 || navigator.userAgent.indexOf("MSIE 7.0") != -1 || navigator.userAgent.indexOf("MSIE 6.0") != -1);
    $scope.gotoSearch = function () {
        $state.transitionTo('root.home');
    };
}];