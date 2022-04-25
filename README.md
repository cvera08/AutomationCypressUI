# AutomationCypressUI

Front-end base automation project using: [Cypress.io](https://www.cypress.io/) - JavaScript

# To run this project:
Open your console/terminal and run this:
```sh
>cd /this/project/path/
>cd AutomationCypressUI

>npm install

>npx cypress open
```

//If you face errors like this: Module not found: Error: Can't resolve 'cypress-xpath' in ....
//You need to be sure you are in the base project folder (AutomationCypressUI) and run 'npm install' again (make sure not to have errors or fix them according the printed help)
>npm install

//If it still not works, please restart all the programs, even your computer and start over again

# Install Cypress via npm:
```sh
>cd /your/project/path/AutomationCypressUI
```

//Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory.
```sh
>npm install cypress --save-dev
>npm install -D cypress-xpath
```



#Open Cypress
//make sure you are in your project path before running the following commands
```sh
>cd /your/project/path/AutomationCypressUI

>./node_modules/.bin/cypress open
```
//or
```sh
>$(npm bin)/cypress open
```

//or
```sh
>npx cypress open
```

//or
```sh
>yarn run cypress open
```


