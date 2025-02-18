import { ELEMENTS } from '../elements/toDo.elements'
import { getRandomItem } from '../utils'

Cypress.Commands.add('validatesHomeScreen', () => {
  cy.get(ELEMENTS.todoInputWhatNeedsToBeDone)
    .should('have.attr', 'placeholder')
    .and('include', 'What needs to be done?')
})

Cypress.Commands.add('addItemToList', () => {
  const randomItem = getRandomItem();
  cy.get(ELEMENTS.inputToDo)
    .type(randomItem)
    .type('{enter}')
});

Cypress.Commands.add('addAllItemsToList', () => {
  var allItens = [
    'Pear', 'Apple', 'Grape', 'Pitaya', 'Melon', 'Pineapple',
    'Strawberry'
  ]

  allItens.forEach(function (item, indice, array) {
    cy.get(ELEMENTS.inputToDo)
      .type(item)
      .type('{enter}')
  })
})

Cypress.Commands.add('completeItems', () => {
  cy.get(ELEMENTS.completeButton)
    .first()
    .click()
})

Cypress.Commands.add('filterAll', () => {
  cy.get(ELEMENTS.filterAll)
    .click()
})

Cypress.Commands.add('filterActive', () => {
  cy.get(ELEMENTS.filterActive)
    .and('be.visible')
    .click()
})

Cypress.Commands.add('filterCompleted', () => {
  cy.get(ELEMENTS.filterCompleted)
    .and('be.visible')
    .click()
})

Cypress.Commands.add('filterClear', () => {
  cy.get(ELEMENTS.clearCompletedButton)
    .and('be.visible')
    .click()
})

Cypress.Commands.add('deleteItem', () => {
  cy.get(ELEMENTS.deleteButton)
    .first()
    .invoke('show')
    .click()
})

Cypress.Commands.add('counter', () => {
  cy.get(ELEMENTS.counter)
    .contains('7 items left!')
})

Cypress.Commands.add('arraySize', (expectedCount) => {
  cy.get(ELEMENTS.listSize)
    .find('li')
    .should('have.length', expectedCount);
})