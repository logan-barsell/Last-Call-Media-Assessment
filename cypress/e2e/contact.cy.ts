Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test when there are errors originating from the application code
  // in this case this error was failing the test:
  // Uncaught TypeError: Cannot read properties of undefined (reading 'removeClass')
  return false;
});

describe('Contact page tests', () => {
  beforeEach(() => {
    cy.visit('https://lastcallmedia.com/contact'); // visit contact page before each test
  });
  it('Test contact form and CAPTCHA requirements', () => {
    cy.get('#edit-field-name-0-value').type('Logan Barsell'); // Types name
    cy.get('#edit-mail').type('contact@loganbarsell.com'); // Types valid email
    cy.get('#edit-message-0-value').type('Hello!'); // Types message
    // Intercepts the POST request made on form submission
    cy.intercept('POST', 'https://lastcallmedia.com/contact', {
      statusCode: 400, // Bad request due to to invalid CAPTCHA
    }).as('submit'); // creates alias for this API request interception
    cy.get('#edit-submit').click(); // Clicks the form submit button
    cy.get(`@submit`).should('be.null'); // Asserts that the form should not have been submitted
    cy.get('#edit-submit').should('be.disabled'); // Asserts that the submit button should be disabled

    // Asserts that this text is being displayed
    cy.contains(
      'The answer you entered for the CAPTCHA was not correct.'
    ).should('exist');
    // Asserts that this text is not being displayed
    cy.contains("Nice to hear from you! We'll be in touch soon.").should(
      'not.exist'
    );
  });
});
