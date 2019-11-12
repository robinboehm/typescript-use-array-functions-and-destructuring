// Import stylesheets
import './style.css';


const books: Array<{title: string, isbn: string}> = []

// Task: Define an interface for User and define a generic Array. Then find all the typos that happend here.
const users = [
  {firstname: 'Robin', lastname:'Böhm', Admin: true},
  {firstname: 'Lisa', lastname:'Carls', admin: true},
  {firstname: 'Anne', lastname:'Garagiola', admin: true},
  {firstName: 'Max', lastName:'Löffler', admin: true},
  {fristname: 'Peter', lastname:'Umme', admin: true},
  {firstname: 'Jessica', lastname:'Jones🦸‍♀️️', damin: true},
  {firstname: 'Olga', lastname:'Rasslith'},
  {first_name: 'Phin', last_name:'Li', admin: true},

]


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>Use arrays functions and destructuring`;