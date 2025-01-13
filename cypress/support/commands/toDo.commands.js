import { ELEMENTS } from '../elements/toDo.elements'
import { getRandomItem } from '../utils'

Cypress.Commands.add('addItemToList', () => {
  const randomItem = getRandomItem();
  cy.get(ELEMENTS.inputToDo)
    .type(randomItem)
    .type('{enter}')
});