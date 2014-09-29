(function() { 
    var MainController = function($scope, $http) {

        var person = {

            firstName: "Tugberk",
            lastName: "Ugurlu",
            imageSrc: "https://pbs.twimg.com/profile_images/418363635270823936/H_X0pAlb.jpeg"
        };

        $http.get('/home/user')
            .then(function(response) {

                    $scope.me = {
                        firstName: response.data.FirstName,
                        lastName: response.data.LastName,
                        imageSrc: response.data.ImageSrc
                    };

                }, function(reason) { 

                    $scope.error = "Something went wrong!!!"
                });
    }
    
    var MainTitleController = function($scope) {
        $scope.title = "Hello Bower, angularjs and other cool stuff...";
    }
    
    angular.module('mainApp', [])
        .controller('MainTitleController', ['$scope', MainTitleController])
        .controller('MainController', ['$scope', '$http', MainController]);
    
}());