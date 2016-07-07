/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
    module('store').
        component('store', {
           templateUrl: 'store/store.template.html',
           controller: ['Buildings', '$scope', '$rootScope',
               function StoreController(Buildings, $scope, $rootScope) {
                this.currentGold =0;
                this.buildings = Buildings.query();
                
                
                this.buyBuilding = function(building) {
                    building.number += 1;
                    console.log("GPC, GPS, price", building.gpc, building.gps, building.price);
                    this.currentGold -= building.price;
                    $rootScope.$broadcast('income-upgraded', building);
                    building.price = building.price + building.costUp;
                    for(i = 0; i < this.buildings.length; i++)
                    {
                        if(this.buildings[i].price <= this.currentGold)
                        {
                            this.buildings[i].isDisabled = false;
                            console.log("Zmienilo na false");
                        }
                        else
                        {
                            this.buildings[i].isDisabled = true;
                            console.log("Zmienilo na true");
                        }
                    }
                    //stats = {price: building.price, gpcUP: building.gpc, gpsUP: building.gps};
                    //console.log("GPC, GPS, price", stats.gpc, stats.gps, stats.price);
                    
                    
                };
                
            
                   
                (function (param) {
                    return $scope.$on('current-gold-changed', function(event, args) {
                    param.currentGold = args.currentGold;
                    for(i = 0; i < param.buildings.length; i++)
                    {
                        if(param.buildings[i].price <= param.currentGold)
                        {
                            param.buildings[i].isDisabled = false;
                            console.log("Zmienilo na false");
                        }
                        else
                        {
                            param.buildings[i].isDisabled = true;
                            console.log("Zmienilo na true");
                        }
                    }
                    console.log("currGold", param.currentGold);
                });
                })(this);
//                $scope.$on('current-gold-changed', function(event, args) {
//                    this.currentGold = args.currentGold;
//                    console.log("currGold", this.currentGold);
//                });
               
               
           }
        ]
});