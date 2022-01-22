
describe('Home page', () => {
  it('should render', () => {
    cy.visit('/');
  });
});


describe('Add Applicant Modal', () => {
  it('Add applicant button can be clicked', () => {
    cy.visit('/');
    cy.get('.buttons-main').click();
  });

  it('should be able to click the close button to remove the modal', () => {
    cy.visit('/');
    cy.get('.buttons-main').click();
    cy.get('.close-button').click();
  })

  it('should be able to add applicant and click the submit button. The data should persist', () => {
    cy.visit('/');
    cy.get('.buttons-main').click();
    cy.get('.first-name-field').type('test');
    cy.get('.last-name-field').type('test');
    cy.get('.email-field').type('test');
    cy.get('.number-field').type('test');
    cy.get('.exp-field').type('test');
    cy.get('.skills-field').type('test');
    cy.get('.submit-button').click();
  });
});


describe("edit and delete applicants", () => {
  it("should be able to edit an existing applicant", () => {
    cy.visit("/");
    cy.get(".edit-button").last().click('left');
    cy.get(".first-name-field").clear();
    cy.get(".first-name-field").type("test2");
    cy.get(".submit-button").click();
  });

  it('should be able all to delete all test added applicants', () => {
    cy.visit('/');
    cy.get('.delete-button').last().click('right');
    cy.get('.delete-button').last().click('right');
  });
});

describe("Jobs accordians", () => {
  it('should be able to click on each job accordian and expand/collapse', () => {
    cy.visit('/');
    cy.get('.job-accordian').click({ multiple: true });
    cy.get('.job-accordian').click('top', { multiple: true });
  });
});