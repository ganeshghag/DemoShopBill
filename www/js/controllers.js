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
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
