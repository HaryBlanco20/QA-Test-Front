Feature: Verificar que la plataforma permita cerrar la sesión correctamente
Como usuario que desea cerrar sesión
Quiero que el sistema permita cerrar la sesión de manera correcta
Para confirmar que la sesión ha sido cerrada exitosamente

Scenario: El usuario cierra sesión correctamente
    Given El usuario navega a la URL del login "https://test-qa.inlaze.com/auth/sign-in"
    When El usuario ingresa "andres.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario hace clic en el botón "Sign In"
    And El usuario hace clic en la imagen de perfil
    And El usuario hace clic en la opción "Logout"
    Then El usuario es redirigido a la página de login "https://test-qa.inlaze.com/auth/sign-in"