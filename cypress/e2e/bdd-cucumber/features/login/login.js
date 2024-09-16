import { LoginPage } from '../../../../support/pages/login'
import { MainPage } from '../../../../support/pages/main';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const loginPage = new LoginPage();
const mainPage = new MainPage();

Given('I am in the main page', () => {
    cy.visit('/');
    loginPage.acceptCookies();
  });

When('I click on the login button', () => {
  loginPage.clickLoginBtn();
});

When('I type the correct email and password', () => {
  loginPage.enterCorrectCredentials();
});

When('I type incorrect credentials', () => {
  loginPage.enterWrongCredentials();
});

Then('I should see the user button', () => {
  mainPage.assertCorrectLogin();
});

Then('I should see the error message', () => {
  loginPage.assertErrorMsg();
});
