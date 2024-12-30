Feature: Verificar que el usuario pueda loguearse con el email y contraseña correctos
Como usuario registrado
Quiero poder loguearme con mi email y contraseña
Para poder acceder a la plataforma

# Escenario para login exitoso con credenciales correctas
Scenario: Ingresar con email y contraseña correctos 
    Given El usuario navega a la URL del login "https://test-qa.inlaze.com/auth/sign-in"
    When El usuario ingresa "andres.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario hace clic en el botón "Sign In"
    Then El usuario es redirigido a la página principal de la plataforma "https://test-qa.inlaze.com/panel"

# Escenario para contraseña incorrecta
Scenario: Verificar que el sistema no permita iniciar sesión con la contraseña incorrecta
    Given El usuario navega a la URL del login "https://test-qa.inlaze.com/auth/sign-in"
    When El usuario ingresa "andres.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password1234*" en el campo "Password"
    And El usuario hace clic en el botón "Sign In"
    Then El sistema muestra el mensaje "Password doesn't match"

# Escenario para usuario no registrado
Scenario: Verificar que el sistema no permita iniciar sesión con un usuario no registrado
    Given El usuario navega a la URL del login "https://test-qa.inlaze.com/auth/sign-in"
    When El usuario ingresa "inc.perez@example.com" en el campo "Email"
    And El usuario ingresa "Password123*" en el campo "Password"
    And El usuario hace clic en el botón "Sign In"
    Then El sistema muestra el siguiente mensaje "User not found"
