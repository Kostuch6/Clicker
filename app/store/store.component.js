/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
    module('store').
        component('store', {
           templateUrl: 'store.template.html',
           controller: ['Buildings' ,
               function StoreController(Buildings) {
                
                this.buildings = Buildings.query();
               
               $scope.$on('current-gold-changed', function(event, args) {
                   var currentGold = args.currentGold;
               });
           }
        ]
});