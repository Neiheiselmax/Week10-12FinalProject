(function() {
    'use strict';

    angular
        .module('routing')
        .controller('MapController', function() {
          const vm = this;



          var mymap = L.map('mapid').setView([39.109424, -84.507657], 14);
          L.tileLayer('https://api.mapbox.com/styles/v1/neiheiselmax/cj1xr1b2z00022sqtgsyvji1p/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVpaGVpc2VsbWF4IiwiYSI6ImNqMXhyM2NhajAwMTUyd3BscTBvYnZqbDIifQ.e7DmxnSVfKfzD1DrSjIdBg', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          }).addTo(mymap);

          var marker = L.marker([39.109424, -84.507657]).addTo(mymap);
          marker.bindPopup("<b>Spring St. Playground</b><br><br><b>Condition: </b>One Double Rim (No Net), One Single Rim<br>Slight Uphill, Great Pavement, No Water Fountain<br><br> <a href=/#/springCourt>More Details/Status</a>").openPopup();



        })

      })();
