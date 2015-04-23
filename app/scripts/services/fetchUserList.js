'use strict';

angular.module('myAmericaApp').factory('FetchUserList', function($resource, RIDB_API_URL, RIDB_API_KEY, WanderListApi) {
  var FetchUserList = $resource(WanderListApi + "/userList/fetch/:userId");

  function get(params, callback) {
    FetchUserList.get(params, callback);
  }

  return {
    get: get
  };
});
