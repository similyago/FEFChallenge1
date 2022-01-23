'use strict';

//SHOW COOKIES FUNCTIONS
const showCookies = function () {
  return document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    );
};

//ADD COOKIES FUNCTIONS
const expCookie = function () {
  let now = new Date();
  now.setDate(now.getDate() + 7);
  return `expires=${now.toUTCString()}`;
};
const getType = function () {
  return document.getElementById('type-input').value;
};
const getValue = function () {
  return document.getElementById('value-input').value;
};
const addCookie = function () {
  document.cookie = getType() + '=' + getValue() + '; path=/; ' + expCookie();
};

//EDIT COOKIES FUNCTIONS
const newType = function () {
  return document.getElementById('type-edit-input').value;
};
const newValue = function () {
  return document.getElementById('value-edit-input').value;
};
const editCookie = function () {
  document.cookie = newType() + '=' + newValue() + '; path=/; ' + expCookie();
};

//DELETE COOKIES FUNCITONS
const pastExpCookie = function () {
  let now = new Date();
  now.setDate(now.getDate() - 10);
  return `expires=${now.toUTCString()}`;
};
const deleteType = function () {
  return document.getElementById('type-delete-input').value;
};
const deleteCookie = function () {
  document.cookie = deleteType() + '=' + '' + ' ; path=/; ' + pastExpCookie();
};
//BUTTONS
//Show cookies
document.querySelector('.view-btn').addEventListener('click', function () {
  console.log('View button pressed');
  console.log(showCookies());
  document.querySelector('.view').textContent = document.cookie;
  // console.log(showCookies()[1]);
});

//Add cookies
document.querySelector('.add-btn').addEventListener('click', function () {
  console.log('Add button pressed');
  addCookie();
});

//Edit cookies
document.querySelector('.edit-btn').addEventListener('click', function () {
  console.log('Edit button pressed');
  editCookie();
});

//Delete cookies
document.querySelector('.delete-btn').addEventListener('click', function () {
  console.log('delete button pressed');
  deleteCookie();
});
