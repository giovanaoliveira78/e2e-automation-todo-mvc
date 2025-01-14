beforeEach(() => {
  cy.visit(`${Cypress.config("baseUrl")}/examples/react/dist/`)
  cy.addAllItemsToList();
})

describe('Complete items on the list', () => {
  it('Should complete items on the list', () => {
    cy.completeItems();
  })
})