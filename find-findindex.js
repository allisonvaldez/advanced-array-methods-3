/*
QUESTIONS:
1. discuss the findIndex one for clarification only becomes negative when assigned to a variable?
 */

//FIND

/*
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(usersArray, username) {
  // can have any parameter name still does the same
  return usersArray.find((val) => {
    return val.username === username;
  });
}

// FINDINDEX

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex((val) => {
    return val.username === username;
  });

  if (foundIndex === -1) return;

  return usersArray.splice(foundIndex, 1)[0];
}