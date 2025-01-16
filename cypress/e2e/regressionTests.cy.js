beforeEach(() => {
  cy.visit(`${Cypress.config("baseUrl")}/examples/react/dist/`)
})

describe('Regression Tests - ToDo MVC', () => {
  context('Validates the home screen', () => {
    it('Should validate the home screen', () => {
      cy.validatesHomeScreen();
    })
  })

  context('Validates the addition of items to the list.', () => {
    it('Should add a new item to the list', () => {
      cy.addItemToList();
    })
  })

  context('Validates the completion of items', () => {
    it('Should complete items on the list', () => {
      cy.addAllItemsToList();
      cy.completeItems();
    })
  })

  context('Validates the filters', () => {
    beforeEach(() => {
      cy.addAllItemsToList();
      cy.completeItems();
    })
    it('Should filter all items', () => {
      cy.filterAll();
    })

    it('Should filter all active items', () => {
      cy.filterActive();
    })

    it('Should filter the completed items', () => {
      cy.filterCompleted();
    })

    it('Should clear all items', () => {
      cy.filterClear();
    })
  })

  context('Validates the deletion of items from the list', () => {
    beforeEach(() => {
      cy.addAllItemsToList();
    })
    it('Should delete items from the list', () => {
      cy.deleteItem();
    })
  })
})