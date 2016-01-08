angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopover) {

    $scope.items = [];
    $scope.cartTotal = 0;

     var template = '<ion-popover-view class="contendheight"><ion-header-bar> <h1 class="title">Shopping Cart Bill</h1> </ion-header-bar> <ion-content> <img src="img/qrcode.png" width="100%"/> </ion-content></ion-popover-view>';

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
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
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

    $scope.onAddEntry = function(mydate, quantity, details) {

        entry = new Object();
        entry.mydate = mydate;
        entry.quantity = quantity;
        entry.details = details;
        entry.amount = entry.quantity * 7;

        $scope.entries.push(entry);

        $scope.khataTotal = 0;
        var arrayLength = $scope.entries.length;
        for (var i = 0; i < arrayLength; i++) {
            $scope.khataTotal = $scope.khataTotal + $scope.entries[i].amount;
        }

        $scope.showEntryFields = false;
    }


     var template = '<ion-popover-view class="contendheight"><ion-header-bar> <h1 class="title">e-Khata Bill</h1> </ion-header-bar> <ion-content> <img src="img/qrcode.png" width="100%"/> </ion-content></ion-popover-view>';

      $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
      });

    $scope.onTotalKhata = function($event) {
        $scope.popover.show($event);
    }


});
