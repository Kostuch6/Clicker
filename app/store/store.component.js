/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
    module('store').
        component('store', {
           templateUrl: 'store/store.template.html',
           controller: ['Buildings', 'Upgrades', '$scope', '$rootScope',
               function StoreController(Buildings, Upgrades, $scope, $rootScope) {
                this.currentGold =0;
                this.buildings = Buildings.query();
                this.upgrades = Upgrades.query();
                var temp = { };
                
                this.check = function() {
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
                    
                    for(i = 0; i < this.upgrades.length; i++)
                    {
                        if(this.upgrades[i].price <= this.currentGold)
                        {
                            this.upgrades[i].isDisabled = false;
                            console.log("Zmienilo na false");
                        }
                        else
                        {
                            this.upgrades[i].isDisabled = true;
                            console.log("Zmienilo na true");
                        }
                    }
                };
                
                this.buyBuilding = function(building) {
                    building.number += 1;
                    console.log("GPC, GPS, price", building.gpc, building.gps, building.price);
                    this.currentGold -= building.price;
                    $rootScope.$broadcast('income-upgraded', building);
                    building.price = building.price + building.costUp;
                    this.check();
                };
                
                this.buyUpgrade = function(upgrade) {
                    upgrade.isUpgraded = true;
                    this.currentGold -= upgrade.price;
                    this.check();
                    var gpc = (this.buildings[upgrade.building].number * this.buildings[upgrade.building].gpc) * (upgrade.gpcMod - 1);
                    var gps = (this.buildings[upgrade.building].number * this.buildings[upgrade.building].gps) * (upgrade.gpsMod - 1);
                    temp = { gpc : gpc, price : upgrade.price, gps : gps };
                    $rootScope.$broadcast('income-upgraded', temp);
                    this.buildings[upgrade.building].gpc *= upgrade.gpcMod;
                    this.buildings[upgrade.building].gps *= upgrade.gpsMod;
                    $rootScope.$broadcast('upgrade-bought', upgrade);
                };
             
                (function (param) {
                    return $scope.$on('current-gold-changed', function(event, args) {
                    param.currentGold = args.currentGold;
                    param.check();
                    console.log("currGold", param.currentGold);
                });
                })(this);
           }
        ]
});