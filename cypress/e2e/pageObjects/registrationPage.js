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

    clickSubmitButton(){
        cy.get('[type="submit"]').click()
    }   

    checkButtonState(isEnabled){
        const button = cy.get(".btn.btn-primary")
        if(isEnabled){
            button.should("not.be.disabled")
            .then(()=>{
                cy.log("¡El botón 'Sign Up' está habilitado como se esperaba")
              })
            } else {    
                button.should("be.disabled")
                .then(()=>{
                    cy.log("¡El botón 'Sign Up' está deshabilitado como se esperaba")
                  })
            }    
    }

    verifySucessfulRegistration(){
        cy.url().should("include", "/auth/sign-in")
    }
    verifyToastMessage(message){
        cy.get('app-toast > .flex').should("contain.text", message)
    }
}
export default new RegistrationPage;