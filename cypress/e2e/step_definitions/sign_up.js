import {Given , When, Then, And} from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})

Then('I see "Google" in the title', () => {
    cy.log("Esto es un log")
  })