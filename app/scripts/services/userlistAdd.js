'use strict';

angular.module('myAmericaApp').factory('UserList', function($resource, WanderListApi) {
  var UserList = $resource(WanderListApi + 'userList/add');

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
