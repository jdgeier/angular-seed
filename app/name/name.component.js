'use strict';

class NameFormController {
  firstName;
  lastName;
  clicked;
  constructor(){
    this.clicked = !this.clicked
  }

  buttonClick(){
    this.clicked = !this.clicked
  }
}

angular.module('myApp.name')
.component('nameForm', {
  templateUrl: 'name/name.component.html',
  controller: [NameFormController]
})




