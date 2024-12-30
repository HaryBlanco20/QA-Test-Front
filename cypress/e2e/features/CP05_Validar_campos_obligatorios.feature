Feature: Comprobar que el formulario no se envíe si los campos obligatorios no están completos
Como usuario que desea registrarse
Quiero asegurarme de que el formulario no se pueda enviar si alguno de los campos obligatorios no está completo
Para evitar que se registren usuarios con información incompleta

Scenario: El sistema no permite enviar el formulario si el campo "Full name" está vacío
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario deja vacío el campo "Full name"
    And El usuario ingresa "juan.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario ingresa "Password123*" en el campo "Repeat your password"
    Then El botón "Sign up" debe estar deshabilitado

Scenario: El sistema no permite enviar el formulario si el campo "Email" está vacío
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario ingresa "Juan Perez" en el campo "Full name"
    And El usuario deja vacío el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario ingresa "Password123*" en el campo "Repeat your password"
    Then El botón "Sign up" debe estar deshabilitado

Scenario: El sistema no permite enviar el formulario si el campo "Password" está vacío
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario ingresa "Juan Perez" en el campo "Full name"
    And El usuario ingresa "juan.perez@example.com" en el campo "Email"
    And El usuario deja vacío el campo "Password"
    And El usuario ingresa "Password123*" en el campo "Repeat your password"
    Then El botón "Sign up" debe estar deshabilitado 

Scenario: El sistema no permite enviar el formulario si el campo "Repeat your password" está vacío
    Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
    When El usuario ingresa "Juan Perez" en el campo "Full name"
    And El usuario ingresa "juan.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario deja vacío el campo "Repeat your password"
    Then El botón "Sign up" debe estar deshabilitado 