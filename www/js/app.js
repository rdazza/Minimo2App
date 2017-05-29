// Ionic Starter App
var base_url = "http://localhost:3000";
//var base_url = "http://10.192.78.121:3000";
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position("bottom");

  $stateProvider


    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  .state('tab.subjects', {
    cache: false,
    url: '/subjects',
    views: {
      "tab-subjects": {
        templateUrl: 'templates/tab-subjects.html',
        controller: 'SubjectsCtrl'
      }
    }
  })
    .state('tab.subjects-detail', {
      cache: false,
      url: '/subjects/:subjectId',
      views: {
        "tab-subjects": {
          templateUrl: 'templates/subjects-detail.html',
          controller: 'SubjectDetailCtrl'
        }
      }
    })
    .state('tab.subjects-detail-student', {
      cache: false,
      url: '/subjects/student/:studentId',
      views: {
        "tab-subjects": {
          templateUrl: 'templates/students-detail.html',
          controller: 'StudentDetailCtrl'
        }
      }
    })
    .state('tab.subjects-detail-addstudent', {
      cache: false,
      url: '/subjects/addstudent/:subjectID',
      views: {
        "tab-subjects": {
          templateUrl: 'templates/subject-add-student.html',
          controller: 'SubjectAddStudentCtrl'
        }
      }
    })
  .state('tab.students', {
      cache: false,
      url: '/students',
      views: {
        "tab-students": {
          templateUrl: 'templates/tab-students.html',
          controller: 'StudentsCtrl'
        }
      }
    })
    .state('tab.students-detail', {
      cache: false,
      url: '/students/:studentId',
      views: {
        "tab-students": {
          templateUrl: 'templates/students-detail.html',
          controller: 'StudentDetailCtrl'
        }
      }
    })
  .state('tab.new', {
    url: '/new',
    views: {
      "tab-new": {
        templateUrl: 'templates/tab-new.html',
        controller: 'NewAddCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/students');

});
