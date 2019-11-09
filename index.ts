// Import stylesheets
import './style.css';
import {getConnectionData, getUsers} from './helper';


// Task 1: Use Destructuring to make code more readable
const conData = getConnectionData();
const hostname = conData[0];
const port = conData[1];
const protocol = conData[2];

console.log(`${protocol}://${hostname}:${port}`);


// Task 2: Use Array.map instead of a loop
const users = getUsers();
const userNames = [];
console.log(users);
for(let i=0; i<users.length;i++){
  userNames.push(users[i].name);
}

console.log(userNames);


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>Use arrays functions and destructuring`;