Feature: Validar que la contraseña cumpla con los requisitos de longitud y caracteres
Como usuario que desea registrarse
Quiero que el sistema valide que la contraseña ingresada cumpla con los requisitos de longitud y caracteres 
Para asegurarme de que cumpla con los requisitos de longitud mínima de 8 caracteres, al menos una letra mayúscula, al menos un número y al menos un carácter especial

Scenario: El sistema valida que la contraseña cumple con los requisitos
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario ingresa "Juan Perez" en el campo "Full name"
    And El usuario ingresa "juan.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario ingresa "Password123*" en el campo "Repeat your password"
    Then El botón "Sign up" debe estar habilitado

Scenario: El sistema rechaza una contraseña sin caracteres especiales
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario ingresa "Juan Perez" en el campo "Full name"
    And El usuario ingresa "juan.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password123" en el campo "Password"
    And El usuario ingresa "Password123" en el campo "Repeat your password"
    Then El botón "Sign up" debe estar deshabilitado

Scenario: El sistema rechaza una contraseña sin mayusculas
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario ingresa "Juan Perez" en el campo "Full name"
    And El usuario ingresa "juan.perez@example.com" en el campo "Email"
    And El usuario ingresa "password123*" en el campo "Password"
    And El usuario ingresa "password123*" en el campo "Repeat your password"
    Then El botón "Sign up" debe estar deshabilitado

 Scenario: El sistema rechaza una contraseña sin números
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario ingresa "Juan Perez" en el campo "Full name"
    And El usuario ingresa "juan.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password*" en el campo "Password"
    And El usuario ingresa "Password*" en el campo "Repeat your password"
    Then El botón "Sign up" debe estar deshabilitado