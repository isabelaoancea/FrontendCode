hrApp.controller('FormsController', ['$scope', function ($scope) {
        $scope.submitt= function () {
            if( $scope.myForm.input.$valid)
                alert("Succes");
        }
    }]);