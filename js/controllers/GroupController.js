(function() {
    'use strict';

    angular
        .module('routing')
        .controller('GroupController', function() {
          const vm = this;


          vm.show = function(){
            let dropdown = document.getElementById('myDropdown');
            if(dropdown.classList.contains('hide')){
            dropdown.classList.remove('hide');
          } else {
            dropdown.classList.add('hide');
          }
        },
          vm.show1 = function(){
            let dropdown = document.getElementById('myDropdown1');
            if(dropdown.classList.contains('hide')){
            dropdown.classList.remove('hide');
          } else {
            dropdown.classList.add('hide');
          }
        },
        vm.show2 = function(){
          let dropdown = document.getElementById('myDropdown2');
          if(dropdown.classList.contains('hide')){
          dropdown.classList.remove('hide');
        } else {
          dropdown.classList.add('hide');
        }
        }
        })
      })();
