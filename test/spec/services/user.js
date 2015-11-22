'use strict';

describe('Service: user', function () {

  // load the service's module
  beforeEach(module('pairGeneratorApp'));

  // instantiate service
  var user;

  beforeEach(inject(function (_user_) {
    user = _user_;
  }));

  it('should add user to the list', function () {
    var userObj = {
      "name" : "Qambar",
      "type" : "Developer"
    };

    user.add(userObj);

    var users = user.getAll();

    expect(users[0].name).toBe(userObj.name);
    expect(users[0].type).toBe(userObj.type);
  });

  it('should return id of user when added', function () {
    var userObj = {
      "name" : "Qambar",
      "type" : "Developer"
    };

    expect(user.add(userObj)).toBe(1);
  });

  it('should throw error when object is empty', function () {
    var userObj = {};

    expect(function() {
      user.add(userObj);
    }).toThrow(
      new Error("User should have a name and type")
    );

  });

  it('should throw error when name is not defined', function () {
    var userObj = {"type" : "developer"};

    expect(function() {
      user.add(userObj);
    }).toThrow(
      new Error("User should have a name")
    );

  });

  it('should throw error when name is not defined', function () {
    var userObj = {"name" : "Qambar"};

    expect(function() {
      user.add(userObj);
    }).toThrow(
      new Error("User should have a type")
    );

  });

  it('should not let you add same user twice', function() {
    var userObj = {
      "name" : "Qambar",
      "type" : "Developer"
    };

    user.add(userObj);

    expect(function() {
      user.add(userObj);
    }).toThrow(
      new Error("User with the same name already exists")
    );

  });

  it('should let you add 2 different users', function() {
    var user1Obj = {
      "name" : "user1",
      "type" : "Developer"
    };
    user.add(user1Obj);
    expect((user.getAll()).length).toBe(1);

    var user2Obj = {
      "name" : "user2",
      "type" : "Developer"
    };
    user.add(user2Obj);

    expect((user.getAll()).length).toBe(2);

  });

  it ('should increase the virtual id counter when we add user', function() {
    var user1Obj = {
      "name" : "user1",
      "type" : "Developer"
    };
    var user1Id = user.add(user1Obj);

    var user2Obj = {
      "name" : "user2",
      "type" : "Developer"
    };
    var user2Id = user.add(user2Obj);

    expect(user1Id).toBe(1);
    expect(user2Id).toBe(2);

  });

  it('should let you delete user', function() {
    var user1Obj = {
      "name" : "user1",
      "type" : "Developer"
    };

    var user1Id = user.add(user1Obj);

    var user2Obj = {
      "name" : "user2",
      "type" : "Developer"
    };

    var user2Id = user.add(user2Obj);

    expect(user.getAll().length).toBe(2);
    user.delete(user2Id);

    expect(user.getAll().length).toBe(1);
    user.delete(user1Id);

    expect(user.getAll().length).toBe(0);

  });

  it('should let you get the right user', function() {
    var user1Obj = {
      "name" : "user1",
      "type" : "Developer"
    };

    user.add(user1Obj);

    var user2Obj = {
      "name" : "user2",
      "type" : "Developer"
    };

    user.add(user2Obj);

    var user1 = user.get(1);
    var user2 = user.get(2);

    expect(user1.name).toBe(user1Obj.name);
    expect(user1.type).toBe(user1Obj.type);

    expect(user2.name).toBe(user2Obj.name);
    expect(user2.type).toBe(user2Obj.type);

  });

});
