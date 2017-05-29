
app.controller('NewAddCtrl', function($scope, $http, $ionicPopup ) {

  $scope.NewSubject = {
    name:''
  }

  $scope.NewStudent = {
    name: '',
    address: '',
    studies:'',
    contact1: 'Telefono Casa',
    number1: '',
    contact2:'Telefono Trabajo',
    number2: ''
  };

  $scope.CreateSubject = function () {

    console.log("Create subject ", $scope.NewSubject);

    $http.post(base_url +'/subjects', $scope.NewSubject)
      .success(function(data){
        $scope.NewSubject = {};
        $ionicPopup.alert({
          title: 'Success',
          template: 'Asignatura creada'
        });
      })
      .error(function(data){
        console.log('Error:' + data);
        $ionicPopup.alert({
          title: 'Error',
          template: data
        });
      });
  };

  $scope.CreateStudent = function () {
    $http.post(base_url + '/students', $scope.NewStudent)
      .success(function(data){
        $scope.NewStudent = {}; //clear the form
        $ionicPopup.alert({
          title: 'Success',
          template: 'Estudiante creado'
        });
      })
      .error(function(data){
        console.log('Error:' + data);
        $ionicPopup.alert({
          title: 'Error',
          template: 'Fallo'
        });
      });
  };

})
