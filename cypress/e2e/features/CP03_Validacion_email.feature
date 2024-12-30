Feature: Verificar que el email cumpla con el formato estándar y sea único en la base de datos
Como usuario que desea registrarse
Quiero que el sistema valide que el email ingresado
Para asegurarme de que el email siga el formato estándar y sea único en la base de datos
  Scenario: El sistema detecta un email con formato inválido
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario ingresa "Juan Perez" en el campo "Full name"
    And El usuario ingresa "juan.perez@" en el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario ingresa "Password123*" en el campo "Repeat your password"
    Then El botón "Sign up" debe estar deshabilitado
Scenario: El sistema valida que el email no esté duplicado en la base de datos
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario ingresa "Juan Perez" en el campo "Full name"
    And El usuario ingresa "juan.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario ingresa "Password123*" en el campo "Repeat your password"
    And El usuario hace clic en el botón "Sign up"
    Then El sistema muestra un mensaje de error indicando que el email ya está registrado