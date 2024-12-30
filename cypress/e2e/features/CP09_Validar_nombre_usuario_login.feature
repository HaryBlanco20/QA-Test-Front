Feature: Comprobar que al ingresar se muestre el nombre de usuario
Como usuario que desea ingresar
Quiero que el sistema muestre mi nombre al iniciar sesión exitosamente
Para confirmar que la sesión pertenece a mi usuario logueado

Scenario: Validar que el sistema muestre el nombre de usuario después de iniciar sesión
    Given El usuario navega a la URL del login "https://test-qa.inlaze.com/auth/sign-in"
    When El usuario ingresa "andres.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario hace clic en el botón "Sign In"
    Then El usuario es redirigido a la página principal de la plataforma "https://test-qa.inlaze.com/panel"
    And El sistema muestra el nombre de usuario "Andres Perez"