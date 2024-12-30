// pageObjects/registrationPage.js


class RegistrationPage{
    visit(){
        cy.visit("https://test-qa.inlaze.com/auth/sign-up")
    }
    fillFullName(fullname){
        cy.get("#full-name").type(fullname)
    }
    fillEmail(email){
        cy.get("#email").type(email)
    }
    fillPassword(password){
        cy.get(".join > #password").type(password)
    }
    fillRepeatPassword(confirmPassword){
        cy.get(".join > #confirm-password").type(confirmPassword)
    }
    chechFormVisibility(){
        cy.get("form.flex.flex-col.mb-4").should("be.visible")
    }
    
    checkFieldEnabled(fieldName){
        if(fieldName === "Full Name"){
            cy.get("#full-name").should("be.enabled")
        } else if(fieldName === "Email"){
            cy.get("#email").should("be.enabled")
        } else if(fieldName === "Password"){
            cy.get('.join > #password').should("be.enabled")
        } else if(fieldName === "Confirm Password"){
            cy.get('.join > #confirm-password').should("be.enabled")
        }
    }

    checkFieldSelector(fieldName){
        const selectors = {
            "Full Name": "#full-name",
            "Email": "#email",
            "Password": ".join > #password",
            "Confirm Password": ".join > #confirm-password"
        }
        return selectors[fieldName]
    }

    clickSubmitButton(){
        cy.get('[type="submit"]').click()
    }

    checkDuplicateEmailError() {
        cy.get('app-toast > .flex')
          .should('be.visible') 
          .then(($toast) => {
            const message = $toast.text().trim(); // Obtén el texto del mensaje de error
            if (message !== "Email inválido") {
              throw new Error(`La prueba falló. El sistema permitió registrar al usuario`); 
            }
          })
      }
      
    checkButtonState(isEnabled) {
        const button = cy.get(".btn.btn-primary");
        button.then(($btn) => {
            const isButtonEnabled = !$btn.is(":disabled")
            if (isButtonEnabled && !isEnabled) {
                cy.log("ERROR: El botón 'Sign Up' no debería estar habilitado.")
                throw new Error("El botón 'Sign Up' debería estar deshabilitado, pero está habilitado, por lo tanto el escenario falla.");
            } else if (!isButtonEnabled && isEnabled) {
                // Si el botón está deshabilitado cuando debería estar habilitado (esto no debería pasar si el test es correcto)
                cy.log("ERROR: El botón 'Sign Up' debería estar habilitado.")
                throw new Error("El botón 'Sign Up' debería estar habilitado, pero está deshabilitado.")
            } else if (!isButtonEnabled && !isEnabled) {
                // Si el botón está deshabilitado como se esperaba
                cy.log("¡El botón 'Sign Up' está deshabilitado como se esperaba!")
            } else {
                // Si el botón está habilitado como se esperaba
                cy.log("¡El botón 'Sign Up' está habilitado como se esperaba!")
            }
        })
    }
    
    checkPasswordMatchError() {
        // Verificar que el botón "Sign up" esté deshabilitado
        cy.get('button[type="submit"]').should('be.disabled'); // Asegúrate de usar el selector correcto para el botón
      
        // Verificar que el mensaje de error esté visible y contiene el texto esperado
        cy.get('.label-text-alt')
          .should('be.visible') // El mensaje de error debe ser visible
          .then(($toast) => {
            const message = $toast.text().trim(); // Obtener el texto del mensaje de error
            if (message !== "Passwords do not match") {
              throw new Error(`La prueba falló. El sistema permitió registrar al usuario. El mensaje mostrado fue: ${message}`)
            }else{
                cy.log("¡No es posible continuar con el registro ya que las contraseñas no coinciden!")
            }
        })
    }
      

    verifySucessfulRegistration(){
        cy.url().should("include", "/auth/sign-in")
    }
    verifyToastMessage(message){
        cy.get('app-toast > .flex').should("contain.text", message)
    }
}
export default new RegistrationPage;