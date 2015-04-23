'use strict';

angular.module('myAmericaApp').factory('UserListRemove', function($resource) {
  var UserList = $resource(WanderListApi + '/userList/remove');

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
