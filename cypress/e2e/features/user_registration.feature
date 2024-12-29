Feature: Validar que se pueda registrar un usuario con nombre, email y contraseñas válidos
Scenario: Verificar que el usuario pueda registrarse con un nombre, email y contraseña válidos
  Given El usuario accede a la página de registro "https://test-qa.inlaze.com/auth/sign-up"
  And El formulario de registro está accesible
  And Los campos "Full name", "Email", "Password" y "Repeat your password" están habilitados
  When El usuario ingresa "Juan Perez" en el campo "Full name"
  And El usuario ingresa "juan.perez@example.com" en el campo "Email"
  And El usuario ingresa "Password123*" en el campo "Password"
  And El usuario ingresa "Password123*" en el campo "Repeat your password"
  And El usuario hace clic en el botón "Sign up"
  Then El sistema debe permitir completar el registro correctamente con los datos proporcionados
  And El usuario debe ver el mensaje "Successful registration" 
  And E usuario es redirigido a la página de inicio de sesión "https://test-qa.inlaze.com/auth/sign-in"