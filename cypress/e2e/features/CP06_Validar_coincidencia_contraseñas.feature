Feature: Verificar que el sistema informe si las contraseñas no coinciden
Como usuario que desea registrarse
Quiero asegurarme de que el sistema informe si las contraseñas ingresadas “Password” y “Repeat your password” no coinciden
Para evitar que se registren usuarios con contraseñas diferentes

Scenario: El sistema informa que las contraseñas no coinciden
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario ingresa "Juan Perez" en el campo "Full name"
    And El usuario ingresa "juan.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario ingresa "Password321*" en el campo "Repeat your password"
    Then El botón "Sign up" debe estar deshabilitado
    And El sistema debe mostrar el mensaje "Passwords do not match"