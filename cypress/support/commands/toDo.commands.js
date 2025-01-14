import { ELEMENTS } from '../elements/toDo.elements'
import { getRandomItem } from '../utils'

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
    .eq(1)
    .click()
})