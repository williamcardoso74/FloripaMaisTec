import './style.css'

import { setupCounter } from './counter.js'
import users from './database/users.json'
console.log(users)

let userList = users.map((user) => `<li>${user.username}</li>` )



document.querySelector('#app').innerHTML = `
  <div>
  <h1>Hello DevStart</h1>
  <ul>
  ${userList}
  </ul>
  <input id="search" placeholder="busque seu usuário"></input>
  <button onclick="${handleSearch()}">buscar</button>

  </div>
`

let search = document.querySelector('#search');
console.log(search.value);

function handleSearch () {

  console.log("Hello");
  console.log(search.value);

};

// setupCounter(document.querySelector('#counter'))
