import {Given , When, Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pageObjects/loginPage"; // Importamos el Page Object

Given("El usuario navega a la URL del login {string}", (url) => {
  LoginPage.visit()
})

When("El usuario deja vacío el campo {string}", (action, fieldName) => {
    if (action === "deja vacío") {
        if (fieldName === "Email") {
            LoginPage.fillEmail("")
        } else if (fieldName === "Password") {
            LoginPage.fillPassword("")
        } 
    } else if (action === "ingresa") {
      const inputValue = arguments[2]
      if (fieldName === "Email") {
        LoginPage.fillEmail(inputValue)
      } else if (fieldName === "Password") {
        LoginPage.fillPassword(inputValue)
      }
    }
  cy.wait(1000)
})