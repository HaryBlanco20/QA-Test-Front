import {Given , When, Then, And, But} from "cypress-cucumber-preprocessor/steps"
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

Then("El botón {string} debe estar deshabilitado", () => {
    RegistrationPage.checkButtonState(false)
})

Then("El sistema muestra un mensaje de error indicando que el email ya está registrado", () => {
    RegistrationPage.checkDuplicateEmailError()
})
