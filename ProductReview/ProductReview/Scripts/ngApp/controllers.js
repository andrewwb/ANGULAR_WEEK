(function () {
    angular.module('AngularReview').controller('ReviewController', function ($http, $resource) { // $http is ngRoute. $resource is ngResource. You only need one depending how you want to set up RESTFUL API
        //var vm = this; 
        //vm.fetch = function () {
        //    $http.get('/api/review/').success(function (data) {
        //        vm.items = data;
        //        console.log(data);
        //    }).error(function () {
        //        console.log("There was an error");
        //    });

        //}
        //vm.fetch();

        //vm.fetch = function () {
        //    if (vm.search) {
        //        $http.post('/api/review/', ).success(function (data) {
        //            vm.items = data;
        //            console.log(vm.items);
        //        }).error(function () {
        //            console.log("There was an error");
        //        });
        //    }
        //}

        var self = this;
        var ReviewApi = $resource('/api/review/:id');
        self.items = ReviewApi.query();

        self.add = function () {
            
            var newReview = new ReviewApi({
                Comment: self.comment,
                Rating: self.rating
            });
           
            newReview.$save(function (result) {
                self.items.push(result);
                
            });
        };

        self.update = function (itemToUpdate) {
            itemToUpdate.$save();
            self.updateItem = null;
        };

        self.remove = function (itemToRemove) {
            console.log(itemToRemove);
            itemToRemove.$remove({ id: itemToRemove.Id }, function () {
                self.items = self.items.filter(function (item) {
                    return item.Id !== itemToRemove.Id;
                });
            });
        };
    });
})();