export class MainPage {

    constructor() {
        this.userBtn = '[data-test="userButton"]'
    }

    assertCorrectLogin() {
        cy.get(this.userBtn).should('be.visible');
    }
}