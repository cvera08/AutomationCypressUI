# AutomationCypressUI

Front-end base automation project using: [Cypress.io](https://www.cypress.io/) - JavaScript

# To run this project:
Open your console/terminal and run this: 
```sh
cd </your/desired/project/path/>
```

```sh
git clone https://github.com/cvera08/AutomationUICypressJavaScript.git
```

*you can copy all the commands from here with a single click in the copy icon that will be displayed when you do mouse over the console sections*
```sh
cd AutomationUICypressJavaScript
npm install
npx cypress open
```

Now you are able to run the test/s by clicking any .spec.js file
Make sure you have selected your desired browser before to run
![alt text](https://i.ibb.co/XXD60sP/Cypress-Runner.png)


If you face errors like this: Module not found: Error: Can't resolve 'cypress-xpath' in ....  
You need to be sure you are in the base project folder (AutomationUICypressJavaScript) and run 'npm install' again (make sure not to have errors or fix them according the printed help)
>npm install

If it still not works, please restart all the programs, even your computer and start over again

# Run Sanity suite in headless mode (with video output to see the recording):
```sh
cd </your/project/path>/AutomationUICypressJavaScript
npx cypress run --spec cypress/integration/0-base-cypress-automation/*.spec.js
```
You will get something like this
![alt text](https://i.ibb.co/3TS7gdz/Automation-UICypress-zsh-202-52.png)

# Install Cypress via npm:
```sh
cd </your/project/path>/AutomationUICypressJavaScript
```

Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory.
```sh
npm install cypress --save-dev
npm install -D cypress-xpath
```



# Open Cypress
make sure you are in your project path before running the following commands
```sh
cd </your/project/path/>AutomationUICypressJavaScript

./node_modules/.bin/cypress open
```
or
```sh
$(npm bin)/cypress open
```

or
```sh
npx cypress open
```

or
```sh
yarn run cypress open
```


