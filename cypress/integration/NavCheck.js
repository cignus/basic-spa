/// <reference types="cypress" />

describe('Link Checking', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/')
  })

  it('Click all the links', () => {
   cy.get('[data-cy=homeNav]').click();
   cy.get('[data-cy=stuffNav]').click();
   cy.get('[data-cy=contactNav]').click();
   cy.get('[data-cy=featureNav]').click();
  })
})
