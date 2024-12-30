import {Given , When, Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pageObjects/loginPage"; // Importamos el Page Object

Given("El usuario navega a la URL del login {string}", (url) => {
  LoginPage.visit()
})

When("El usuario ingresa {string} en el campo {string}", (inputValue, fieldName) =>{
  if(fieldName === "Email"){     
    LoginPage.fillEmail(inputValue)
  } else if(fieldName === "Password"){  
    LoginPage.fillPassword(inputValue)
  }
  cy.wait(1000)
})

And("El usuario hace clic en el botón {string}", () => {
  LoginPage.clickSignInButton()
  cy.wait(1000)
})

Then("El usuario es redirigido a la página principal de la plataforma {string}", () => {
  LoginPage.verifyRedirectionToHomepage()
  cy.wait(1000)
})

And("El sistema muestra el nombre de usuario {string}", (userName) => {
  LoginPage.checkUserName(userName)
  cy.wait(1000)
})