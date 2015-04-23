'use strict';

angular.module('myAmericaApp').factory('UserListComplete', function($resource) {
  var UserList = $resource(WanderListApi + '/userList/complete');

  function create( body, callback) {
    var UserListCreate = UserList.bind();
    var userList = new UserListCreate(body);
    userList.$save();
    callback(userList);
  }

  return {
    create: create
  };
});
