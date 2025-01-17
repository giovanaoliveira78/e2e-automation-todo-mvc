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
      cy.arraySize(7);
    })

    it('Should filter all active items', () => {
      cy.filterActive();
      cy.arraySize(6);
    })

    it('Should filter the completed items', () => {
      cy.filterCompleted();
      cy.arraySize(1);
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
      cy.arraySize(6);
    })
  })

  context('Validate the counter', () => {
    it('Should validate the counter', () => {
      cy.addAllItemsToList();
      cy.counter();
    })
  })
})