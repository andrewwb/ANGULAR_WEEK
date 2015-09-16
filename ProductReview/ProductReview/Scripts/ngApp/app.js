(function () {
    angular.module('AngularReview', ['ngRoute']).config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/ngView/ajax/review.html',
            controller: 'ReviewController',
            controllerAs: 'vm'
        });
    });
})();