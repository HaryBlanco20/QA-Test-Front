Feature: Validar que el formulario del login no se envíe si los campos no están completos
Como usuario que desea ingresar
Quiero asegurarme de que el formulario del login no se envíe si los campos no están completos
Para verificar que el sistema me solicita completar los campos obligatorios

Scenario: El formulario no se envía cuando el campo "Password" está vacío
    Given El usuario navega a la URL del login "https://test-qa.inlaze.com/auth/sign-in"
    When El usuario ingresa "andres.perez@example.com" en el campo "Email"
    And El usuario deja vacío el campo "Password"
    Then El botón "Sign in" debe estar deshabilitado

Scenario: El formulario no se envía cuando el campo "Email" está vacío
    Given El usuario navega a la URL del login "https://test-qa.inlaze.com/auth/sign-in"
    When El usuario deja vacío el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    Then El botón "Sign in" debe estar deshabilitado