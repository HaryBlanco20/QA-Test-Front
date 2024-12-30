import {Given , When, Then, And} from "cypress-cucumber-preprocessor/steps"
import RegistrationPage from "../pageObjects/registrationPage"; // Importamos el Page Object

Given("El usuario navega a la URL del formulario de registro {string}", (url) => {
  RegistrationPage.visit()
})

When("El usuario deja vacío el campo {string}", (action, fieldName) => {
    if (action === "deja vacío") {
      if (fieldName === "Full name") {
        RegistrationPage.fillFullName("")
      } else if (fieldName === "Email") {
        RegistrationPage.fillEmail("")
      } else if (fieldName === "Password") {
        RegistrationPage.fillPassword("")
      } else if (fieldName === "Repeat your password") {
        RegistrationPage.fillRepeatPassword("")
      }
    } else if (action === "ingresa") {
      const inputValue = arguments[2]
      if (fieldName === "Full name") {
        RegistrationPage.fillFullName(inputValue)
      } else if (fieldName === "Email") {
        RegistrationPage.fillEmail(inputValue)
      } else if (fieldName === "Password") {
        RegistrationPage.fillPassword(inputValue)
      } else if (fieldName === "Repeat your password") {
        RegistrationPage.fillRepeatPassword(inputValue)
      }
    }
    cy.wait(500); 
  })

Then("El botón {string} debe estar deshabilitado", () => {
    RegistrationPage.checkButtonState(false)
})
