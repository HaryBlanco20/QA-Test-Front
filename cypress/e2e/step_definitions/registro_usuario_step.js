import {Given , When, Then, And} from "cypress-cucumber-preprocessor/steps"
import RegistrationPage from "../pageObjects/registrationPage"; // Importamos el Page Object

Given("El usuario navega a la URL del formulario de registro {string}", (url) => {
  RegistrationPage.visit()
})

When("El usuario ingresa {string} en el campo {string}", (inputValue, fieldName) =>{
  if(fieldName === "Full name"){
    RegistrationPage.fillFullName(inputValue)
  } else if(fieldName === "Email"){     
    RegistrationPage.fillEmail(inputValue)
  } else if(fieldName === "Password"){  
    RegistrationPage.fillPassword(inputValue)
  } else if(fieldName === "Repeat your password"){  
    RegistrationPage.fillRepeatPassword(inputValue)
  }
  cy.wait(300)
})

And("El usuario hace clic en el botón {string}", () => {
  cy.get('[type="submit"]').click()
})

Then("El sistema debe permitir completar el registro correctamente", () => {
  cy.url().should("include", "/auth/sign-in")
})

And("El usuario debe ver el mensaje {string}", (message) => {
  cy.get('app-toast > .flex').should("contain.text", message)
})

And("El usuario debe ser redirigido a la página de inicio de sesión en {string}", () => {
  cy.url().should("include", "/auth/sign-in")
  .then(()=>{
    cy.log("¡El usuario ha sido registrado exitosamente!")
  })
})