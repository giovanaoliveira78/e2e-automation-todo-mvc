beforeEach(() => {
  cy.visit(`${Cypress.config("baseUrl")}/examples/react/dist/`)
})

describe('Adds items to the list', () => {
  it('Should add a new item to the list', () => {
    cy.addItemToList();
  })

  it('Should add more than one item to the list', () => {
    cy.addAllItemsToList();
  })
})