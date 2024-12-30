// pageObjects/loginPage.js

class LoginPage {
    visit(){
        cy.visit("https://test-qa.inlaze.com/auth/sign-in")
    }
    fillEmail(email){
        cy.get("#email").type(email)
    }
    fillPassword(password){
        cy.get(".join > #password").type(password)
    }
    verifyRedirectionToHomepage() {
        cy.url().should("include", "/panel")
        .then(()=>{
            cy.log("¡El usuario ha iniciado sesión exitosamente!")
        })
    }

    verifyRedirectionToLogin(){
        cy.url().should("include", "/auth/sign-in")
        .then(()=>{
            cy.log("¡El usuario ha cerrado sesión exitosamente!")
        })
    }
    clickSignInButton(){
        cy.get('[type="submit"]').click()
    }   
    clickLogoutButton() {
        cy.contains("Logout").click();
    }
    
    clickProfileImage(){
        cy.get('img').click()
    }

    checkUserName() {
        cy.get('.flex > .font-bold') // Selecciona el elemento que muestra el nombre del usuario
          .should('be.visible') // Verifica que sea visible
          .then(() => {
              cy.log('Escenario ejecutado exitosamente: El nombre del usuario se mostró correctamente.'); // Registra el éxito
          })
    }
    
    checkErrorMessage(message) {
        cy.get('.ml-3')  // Seleccionamos el campo que contiene el mensaje de error
          .should('be.visible')  // Verificamos que esté visible
          .then(($toast) => {
            const errorMessage = $toast.text().trim(); // Obtenemos solo el texto del mensaje de error
            cy.log(errorMessage);  // Para depuración: muestra el mensaje de error capturado
            expect(errorMessage).to.include(message); // Verificamos que el mensaje contenga el texto esperado
          });
      }
}

export default new LoginPage();
