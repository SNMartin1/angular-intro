console.log('JS sourced');

//created app and linked angular to it
var myApp = angular.module('myApp', []);

myApp.controller('OnloadController', function() {
  var control = this;
  console.log(this);


  control.displayInfo = function(userName, userMessage) {
    var info = {userName: userName, userMessage: userMessage};
    console.log(info);
  };
});
