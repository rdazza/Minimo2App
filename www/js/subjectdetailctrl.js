
app.controller('SubjectDetailCtrl', function($scope, $http,  $stateParams, $ionicPopup, $timeout) {
  var SubjectID = ($stateParams.subjectId);


  $http.get(base_url +'/subjects/'+ SubjectID)
    .success(function(data) {
      $scope.subject = data;
      $scope.subjectstudents = data.students;
      console.log($scope.subjectstudents);
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.QuitStudentInSubject = function (id) {
    $http.delete(base_url + '/subjects/deletestudent/' + SubjectID +'/'+ id)
      .success(function(data){
        $scope.subject = data;
        $scope.subjectstudents= data.students;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };

})
