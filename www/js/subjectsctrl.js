
app.controller('SubjectsCtrl', function($scope, $http, $ionicPopup, $timeout) {

  $scope.search = {};

  $http.get( base_url + '/subjects')
    .success(function(data) {
      $scope.subjects = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.DeleteSubject = function (id) {
    $http.delete(base_url + '/subjects/' + id)
      .success(function(data){
        $scope.subjects = data;
        $scope.SubjectFound = data;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };

  $scope.Order = function () {
    $scope.OrderDo = 'name';
  };
  $scope.Order2 = function () {
    $scope.OrderDo = '-students.length';
  };
  $scope.Order3 = function () {
    $scope.OrderDo = '+students.length';
    console.log($scope.OrderDo);
  };

  $scope.returnAll = function () {
    $scope.search = {};
    $http.get( base_url + '/subjects')
      .success(function(data) {
        $scope.subjects = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };


  $scope.showPopup = function() {


    var myPopup = $ionicPopup.show({
      template: '<div class="text-center"><label>Use: &nbsp;&nbsp;</label></div>',

      scope: $scope,
      buttons: [
        { text: 'Cancel',
          onTap: function () {
            $http.get( base_url + '/subjects')
              .success(function(data) {
                $scope.subjects = data;
                console.log(data);
              })
              .error(function(data) {
                console.log('Error: ' + data);
              });
          }},


      ]
    });

    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });


  };

})
