'use strict';

const signUpSuccess = (data) => {
  console.log(data);
};


const signUpFailure = (error) => {
  console.error(error);
};


const signInSuccess = (data) => {
  // store new user in app.user
  app.user = data.user;
  console.log('app.user is', app.user);
};


const signInFailure = function (error) {
  console.error(error);
};


const signOutSuccess = () => {
  // clear the user object
  app.user = null;
  console.log('app.user is', app.user);
};

const signOutFailure = (error) => {
  console.error(error);
};


const changePasswordSuccess = () => {
  console.log('changePasswordSuccess');
};

const changePasswordFailure = (error) => {
  console.error(error);
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
};
