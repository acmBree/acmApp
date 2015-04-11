angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $localStorage, geoLocation) {
    // geoLocation.watchPosition().then(function(resp) {}, function(err) {}, function(position) {
    //     $scope.lat = position.coords.latitude;
    //     $scope.lng = position.coords.longitude;
    // });

    // $scope.getLatLng = function() {
    //     if (!$scope.lat && !$scope.lng) {
    //         return '???';
    //     }
    //     return $scope.lat.toFixed(3) + ', ' + $scope.lng.toFixed(3);
    // };

    $scope.geo = geoLocation.getGeolocation();

})

.controller('ChatsCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $localStorage, geoLocation) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $localStorage, geoLocation) {
    $scope.settings = {
        enableFriends: true
    };
});
