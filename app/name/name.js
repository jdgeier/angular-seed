'use strict';

angular.module('myApp.name', ['ngRoute'])
.component('nameForm', {
  templateUrl: 'name/name.html',
  controller: ['$routeParams', 
    function NameController($routeParams) {
      var self = this;
      self.firstName = 'blah'
      self.lastName = ''
      self.clicked = !self.clicked
      self.buttonClick = function buttonClick(){
        self.clicked = !self.clicked
      }
    }
  ]
})




