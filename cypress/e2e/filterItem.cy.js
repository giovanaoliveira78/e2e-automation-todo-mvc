beforeEach(() => {
  cy.visit(`${Cypress.config("baseUrl")}/examples/react/dist/`)
  cy.addAllItemsToList();
  cy.completeItems();
})

describe('Filter functionality', () => {
  it('Should filter active items', () => {
    cy.filterActive();
  })

  it('Should filter completed items', () => {
    cy.filterCompleted();
  })
})