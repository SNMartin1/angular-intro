console.log('JS sourced');

//created app and linked angular to it
var myApp = angular.module('myApp', []);

myApp.controller('OnloadController', function() {
  var control = this;
  console.log(this);

   control.userArray = [];
   control.displayInfo = function(userName, userMessage) {
  // control.info = {userName: userName, userMessage: userMessage};

  var info = {userName: userName, userMessage: userMessage};
  control.userArray.push(info);
  };
});
