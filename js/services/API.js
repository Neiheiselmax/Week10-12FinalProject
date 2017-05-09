(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http){

        return {
          getCourts:()=>{
            return $http({
              method:"GET",
              url:"http://localhost:8080/courts",
            })
          },

        postCourts:(data)=>{
            return $http({
              method:"POST",
              data: data,
              url:`http://localhost:8080/courts/`,
            })
          },

          getCourt:(id)=>{
            return $http({
              method:"GET",
              url:`http://localhost:8080/courts/${id}`,
            })
          },
          deleteCourt:(id)=>{
            return $http({
              method:"DELETE",
              url:`http://localhost:8080/courts/${id}`,
            })
          }
    	}
    });

})();
