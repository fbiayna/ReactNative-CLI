interface UserFunctions {
    getMethod: Function
}

function UserController ():UserFunctions {
  function getMethod () {

  }
  return {
    getMethod
  }
}

module.exports = UserController
