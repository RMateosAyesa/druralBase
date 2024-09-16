export class LoginPage {

    constructor() {
        this.cookies = '.sc-zDqdV > .elkRPf',
        this.geoLocation = '[data-test="notification-modal"]',
        this.loginBtn = '[data-test="testButton"] > .sc-iwsKbI',
        this.inputEmail = '[name="email"]',
        this.inputPass = '[name="password"]',
        this.submitBtn = '[data-test="submit"]',
        this.errorMsg = '.input__error'
    }

    acceptCookies() {
        //cy.get(this.geoLocation).click();
        cy.get(this.cookies).click();
    }

    clickLoginBtn() {
        cy.get(this.loginBtn).click();
    }

    enterCorrectCredentials() {
        cy.fixture('users').then((user) => {
            cy.get(this.inputEmail).type(user.drural.email);
            cy.get(this.inputPass).type(user.drural.pass);
          })
          
        cy.get(this.submitBtn).click();
    }

    enterWrongCredentials() {
        cy.get(this.inputEmail).type("asdasd@test.com");
        cy.get(this.inputPass).type("Test123abc");
        cy.get(this.submitBtn).click();
    }

    assertErrorMsg() {
        cy.fixture('messages').then((errorMsg) => {
            cy.get(this.errorMsg).should('have.text', errorMsg.emailError);
        });
    }

}