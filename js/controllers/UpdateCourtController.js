(function() {
    'use strict';

    angular
        .module('routing')
        .controller('UpdateCourtController', function(API) {
          const vm = this;


        vm.update = function(isValid) {
            alert("goodJob")
            console.log(vm.item);
            if (isValid) {
            let newItem = {"court": vm.item.court, "user": vm.item.user,  "update": vm.item.update,};
            let post = API.postCourts(newItem);
            post.then(res=>{
              console.log(res);
            })
            vm.item = {}
             }else{
              alert("Form Incomplete")
             }
        }

      })
    })();
