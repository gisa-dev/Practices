let UI= require('./ui');
let Github = require('./github');

let { client_id, client_secret } = require('./config.json');

// Classes Initialization
let github = new Github(client_id, client_secret);
let ui = new UI();

// DOM Elements
let userForm = document.getElementById('userForm');

// DOM Events
userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let textSearch = document.getElementById('textSearch').value;
  if (textSearch !== '') {
    github.fetchUser(textSearch)
      .then(data => {
        if (data.userData.message === 'Not Found') {
          ui.showMessage('User not Found', 'alert alert-danger mt-2 col-md-12');
        } 
        else {
          // Render Profile
          ui.showProfile(data.userData);
          ui.showRepositories(data.repositories);
        }
      });
  } 
  else {
    ui.reset();
  }
});
