var saccoApp = angular.module('saccoApp', ['ngRoute']);
saccoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'signupController'
        })
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .otherwise({
            redirectTo: '/home'
        });

     });

    saccoApp.controller('signupController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
        // Apply the Update
        $scope.updateData = function (email, name, password) {
            var data = {

                email: email,
                name: name,
                password: password
            }


            // Apply $http put service
            $http.post('http://127.0.0.1:5000/api/register-user', JSON.stringify(data)).then(function (response) {
                //var json = JSON.parse(response)
                console.log(response.data)
                if (response.data)
                    $scope.msg = "Updated Successfully";
                    $location.path('/signup')

            }, function (response) {

                $scope.msg = "Service Does Not Exist."

            });
        }//end Sign Up
        
    
    }])

