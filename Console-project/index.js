const inquirer = require('inquirer');

inquirer.prompt({
        type: 'editor',
        name: 'code',
        message: 'Write some of your code.'
    })
    .then(answers => {
        console.log('Answer: ', answers);
    })