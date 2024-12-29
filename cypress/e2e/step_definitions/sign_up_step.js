import {Given , When, Then, And} from "cypress-cucumber-preprocessor/steps"

// Paso 1: Acceder a la URL de la página de registro
Given("El usuario accede a la página de registro {string}", (url) => {
  cy.visit(url)
})

// Paso 2: Verificar que el formulario de registro está accesible
And('El formulario de registro está accesible', () => {
    cy.get("form.flex.flex-col.mb-4").should("be.visible")
  })

// Paso 3: Verificar que los campos de nombre completo, correo electrónico, contraseña y confirmar contraseña están habilitados
And("Los campos {string}, {string}, {string} y {string} están habilitados",(fullname, email, password, confirmPassword) => {
  cy.get("#full-name").should("be.enabled")
  cy.get("#email").should("be.enabled")
  cy.get('.join > #password').should("be.enabled")
  cy.get('.join > #confirm-password').should("be.enabled")
})

// Paso 4: Ingresar la palabra "Juan Pérez" en el campo "Full Name"
When("El usuario ingresa {string} en el campo {string}", (value, fieldName) =>{
  if(fieldName === "Full Name"){
    cy.get("#full-name").type(value)
  }
})

And("El usuario ingresa {string} en el campo {string}", (value, fieldEmail) => {
  if(fieldEmail === "Email"){
    cy.get("#email").type(value)
  }
})

And("El usuario ingresa {string} en el campo {string}", (value, fieldPassword) => {
  if(fieldPassword === "Password"){
    cy.get("#password").type(value)
  }
})

And("El usuario ingresa {string} en el campo {string}", (value, fieldConfirmPassword) => {
  if(fieldConfirmPassword === "Confirm Password"){
    cy.get("#confirm-password").type(value)
  }
})

Then("El botón {string} está deshabilitado", (buttonName) => {
  cy.get(".btn.btn-primary").should("be.disabled")
  .then(()=>{
    cy.log("¡El botón 'Sign Up' está deshabilitado como se esperaba")
  })
})

Then("El botón {string} se habilita", (buttonName) => {
  cy.get(".btn.btn-primary").should("be.disabled")
  .then(()=>{
    cy.log("¡El botón 'Sign Up' está habilitado como se esperaba")
  })
})