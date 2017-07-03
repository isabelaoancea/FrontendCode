hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'ManagerServices',
    function($scope, $http, $location, CommonResourcesFactory, ManagerServices) {
        $scope.employee = {};

        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1
        ManagerServices.findEmployees().then(
            function(response) {
                $scope.managers=[];
                var managerIds={};
                for (var i in response.data){
                    var manager = response.data[i].managerId;
                    if (manager != null && managerIds[manager.employeeId]=== undefined){
                        managerIds[manager.employeeId] =true;
                        $scope.managers.push(manager);
                    }
                }

            },
            function(error) {

            }
        );
        ManagerServices.findJobs().then(
            function(response) {
                $scope.jobs= response.data;

            },
            function(error) {

            }
        );
        ManagerServices.findDepartments().then(
            function(response) {
                $scope.departments= response.data;

            },
            function(error) {

            }
        );

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };


        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);