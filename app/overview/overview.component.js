/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
    module('overview').
        component('overview', {
            templateUrl: 'overview/overview.template.html',
            controller:['$scope', function OverviewController($scope) {
                this.absoluteGold;
                this.timer;
                this.upgradesBought = [];
                
                (function (param) {
                    return $scope.$on('upgrade-bought', function(event, upgrade) {
                    param.upgradesBought.push(upgrade);
                });
                })(this);
                
                (function (param) {
                    return $scope.$on('add-to-abslute-gold', function(event, args) {
                    param.absoluteGold += args.addGold;
                });
                })(this);
            }]
});
