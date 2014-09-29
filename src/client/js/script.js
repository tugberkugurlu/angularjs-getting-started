(function() { 
    var MainController = function($scope, $http) {

        var person = {

            firstName: "Tugberk",
            lastName: "Ugurlu",
            imageSrc: "https://pbs.twimg.com/profile_images/418363635270823936/H_X0pAlb.jpeg"
        };

        $http.get('/home/users')
            .then(function(response) {

                    $scope.users = _.map(response.data, function(user) {
                        return {
                            firstName: user.FirstName,
                            lastName: user.LastName,
                            imageSrc: user.ImageSrc
                        };
                    });

                }, function(reason) { 

                    $scope.error = "Something went wrong!!!"
                });
    }
    
    var MainTitleController = function($scope) {
        $scope.title = "Hello Bower, angularjs and other cool stuff...";
    }
    
    var GitHubViewerController = function($scope, $http) {
        
        $http.get('https://api.github.com/users/tugberkugurlu')
            .then(function(response) {
                $scope.user = response.data;
                $http.get(response.data.repos_url).then(function(reposResponse) {
                    $scope.repos = reposResponse.data;
                    $scope.repoSortOrder = "-stargazers_count";
                });
            })
    }
    
    angular.module('mainApp', [])
        .controller('MainTitleController', ['$scope', MainTitleController])
        .controller('MainController', ['$scope', '$http', MainController])
        .controller('GitHubViewerController', ['$scope', '$http', GitHubViewerController]);
    
}());