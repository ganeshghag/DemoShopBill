angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopover) {

    $scope.items = [];
    $scope.cartTotal = 0;

     var template = '<ion-popover-view class="contendheight"><ion-header-bar> <h1 class="title">Shopping Cart Bill</h1> </ion-header-bar> <ion-content> <img src="img/Kirana.png" width="100%"/> </ion-content></ion-popover-view>';

      $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
      });

    $scope.onTotalClick = function($event) {
        $scope.popover.show($event);
    }

    $scope.onRoundOffAmount = function() {
         $scope.cartTotal =  Math.round($scope.cartTotal);
    }

    $scope.onClearCart = function() {
        $scope.items = [];
        $scope.cartTotal =  0;
    }

    $scope.onFruitImageClick = function(name, amount) {
    
    curr = new Object();
    curr.name = name;
    curr.amount = amount

    $scope.items.push(curr);
    //console.log($scope.items);

    $scope.cartTotal = 0;
    var arrayLength = $scope.items.length;
    for (var i = 0; i < arrayLength; i++) {
        $scope.cartTotal = $scope.cartTotal + $scope.items[i].amount;
    }

  };

})

.controller('ChatsCtrl', function($scope, Chats) {

 new Chartist.Bar('.ct-chart', {
  labels: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [200, 300, 250, 350, 200, 500, 150],
    [400, 500, 800, 200, 600, 300, 510],
    [400, 300, 600, 400, 500, 200, 310]
  ]
}, {
  seriesBarDistance: 20,
  axisX: {
    showGrid: false
  },
  height: "200"

});



 new Chartist.Bar('.ct-chart1', {
  labels: ['Mobile', 'Kirana', 'Restaurant', 'Laundry'],
  series: [
    [6500, 7500, 10500, 4500]
  ]
}, {
  seriesBarDistance: 20,
  axisX: {
    showGrid: false
  },
  height: "200"

});



})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicPopover) {

    $scope.entries = [];
    $scope.khataTotal = 0;
    $scope.showEntryFields = false;

    $scope.onShowEntry = function() {
        $scope.showEntryFields = true;
    }

    $scope.onInitView = function() {
        entry = new Object();
        var todays = "" + new Date();
        entry.mydate = todays.substr(0,24) + " IST";
        entry.quantity = parseInt(20);
        entry.details = "Normal delivery, within 3 days";
        entry.amount = parseFloat(200);

        $scope.entries.push(entry);

        entry = new Object();
        var todays = "" + new Date();
        entry.mydate = todays.substr(0,24) + " IST";
        entry.quantity = parseInt(10);
        entry.details = "Express delivery, next day";
        entry.amount = parseFloat(153);

        $scope.entries.push(entry);

        $scope.khataTotal = 0;
        var arrayLength = $scope.entries.length;
        for (var i = 0; i < arrayLength; i++) {
            $scope.khataTotal = $scope.khataTotal + $scope.entries[i].amount;
        }

    }

    $scope.onAddEntry = function(newentry) {

        entry = new Object();
        var todays = "" + new Date();
        entry.mydate = todays.substr(0,24) + " IST";
        entry.quantity = parseInt(newentry.quantity);
        entry.details = "Normal delivery, within 3 days";
        entry.amount = parseFloat(newentry.amount);

        $scope.entries.push(entry);

        $scope.khataTotal = 0;
        var arrayLength = $scope.entries.length;
        for (var i = 0; i < arrayLength; i++) {
            $scope.khataTotal = $scope.khataTotal + $scope.entries[i].amount;
        }

        $scope.showEntryFields = false;
    }


     var template = '<ion-popover-view class="contendheight"><ion-header-bar> <h1 class="title">Bill: Yash Mishra</h1> </ion-header-bar> <ion-content> <img src="img/Dhobi.png" width="100%"/> </ion-content></ion-popover-view>';

      $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
      });

    $scope.onTotalKhata = function($event) {
        $scope.popover.show($event);
    }

    $scope.onRoundOffAmount = function() {
         $scope.khataTotal =  Math.round($scope.khataTotal);
    }

    $scope.onClear = function() {
        $scope.entries = [];
        $scope.khataTotal =  0;
    }



});
