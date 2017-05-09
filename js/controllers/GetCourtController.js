(function() {
    'use strict';

    angular
        .module('routing')
        .controller('GetCourtController', function(API) {
          const vm = this;

          let court = API.getCourts();
          court.then(function successCallback(response){
          console.log(response)
          vm.court = response.data

          vm.sortComment = function(comment) {
            var date = new Date(comment.created);
            return date;
};
          })

          })
         })();
