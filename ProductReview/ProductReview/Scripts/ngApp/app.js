(function () {
    angular.module('AngularReview', ['ngRoute', 'ngResource']).config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/ngView/ajax/review.html',
            controller: 'ReviewController',
            controllerAs: 'vm'
        });
    });
})();