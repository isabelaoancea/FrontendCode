hrApp.service('ManagerServices', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findDepartments: function () {
                return $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return data;
                    });
            },
            findEmployees: function () {
                return $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return data;
                    });
            },
            findJobs: function () {
                return $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return data;
                    });
            },

        }
    }]
);