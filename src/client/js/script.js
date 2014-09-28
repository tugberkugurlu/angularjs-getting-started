var MainTitleController = function($scope) {
    $scope.title = "Hello Bower, angularjs and other cool stuff...";
}

var MainController = function($scope) {
    
    var person = {
        firstName: "Tugberk",
        lastName: "Ugurlu",
        imageSrc: "https://pbs.twimg.com/profile_images/418363635270823936/H_X0pAlb.jpeg"
    };
    
    $scope.me = person;
}