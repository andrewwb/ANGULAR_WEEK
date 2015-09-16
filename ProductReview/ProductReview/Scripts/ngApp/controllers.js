(function () {
    angular.module('AngularReview').controller('ReviewController', function ($http) {
        var vm = this;
        vm.fetch = function () {
            $http.get('/api/review/').success(function (data) {
                vm.items = data;
                console.log(data);
            }).error(function () {
                console.log("There was an error");
            });

        }
        vm.fetch();

        vm.fetch = function () {
            if (vm.search) {
                $http.post('/api/review/', ).success(function (data) {
                    vm.items = data;
                    console.log(vm.items);
                }).error(function () {
                    console.log("There was an error");
                });
            }
        }
    });
})();