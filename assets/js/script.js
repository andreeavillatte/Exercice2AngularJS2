// On a declaré une variable pour avoir l'application, on cree un modul qui s'appelle schoolapp
var schoolApp = angular.module('schoolApp',[]);
// on a cree un controleur studentCtrl avec une dependence SERVICE scope. Ce controlleur est atache au modele schoolApp
schoolApp.controller('studentsCtrl',function($scope){
//  Modèle, comme un tunel
// ensuite on ouvre un tableau
  $scope.firstName = 'Émilie';
  $scope.lastName = 'Gérard';
  $scope.age = '17';
  $scope.grade = 'Terminale';
});
