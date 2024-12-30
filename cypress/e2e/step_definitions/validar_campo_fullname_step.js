import {Given , When, Then, And} from "cypress-cucumber-preprocessor/steps"
import RegistrationPage from "../pageObjects/registrationPage"; // Importamos el Page Object

Given("El usuario accede a la página de registro {string}", (url) => {
  RegistrationPage.visit()
})

And('El formulario de registro está accesible', () => {
    RegistrationPage.chechFormVisibility()
})

And("Los campos {string}, {string}, {string} y {string} están habilitados",(fullname, email, password, confirmPassword) => {
  [fullname, email,password,confirmPassword].forEach((field) => {
    RegistrationPage.checkFieldEnabled(field)
  })
})

When("El usuario ingresa {string} en el campo {string}", (value, fieldName) =>{
  const fieldActions ={
    "Full Name": RegistrationPage.fillFullName,
    "Email": RegistrationPage.fillEmail,
    "Password": RegistrationPage.fillPassword,
    "Repeat your password": RegistrationPage.fillRepeatPassword
  }
  
  const action = fieldActions[fieldName]
  if(action){
    action(value)
  }else{
    throw new Error(`El campo ${fieldName} no está definido`)
  }
  cy.wait(300)
})

Then("El botón {string} está deshabilitado", () => {
  RegistrationPage.checkButtonState(false)
})

Then("El botón {string} se habilita", () => {
  RegistrationPage.checkButtonState(true)
})