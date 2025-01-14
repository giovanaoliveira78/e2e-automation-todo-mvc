beforeEach(() => {
  cy.visit(`${Cypress.config("baseUrl")}/examples/react/dist/`)
  cy.addAllItemsToList();
})

describe('Delete items', () => {
  it('Should delete items from the list', () => {
    cy.deleteItem();
  })
})