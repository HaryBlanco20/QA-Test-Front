Feature: Registro exitoso de usuario con datos válidos
  Como usuario
  Quiero registrarme en la plataforma con un nombre, email y contraseñas válidos
  Para poder acceder a las funcionalidades del sistema correctamente
Scenario: Validar que se pueda registrar un usuario con nombre, email y contraseñas válidos
  Given El usuario navega a la URL del formulario de registro "https://test-qa.inlaze.com/auth/sign-up"
  When El usuario ingresa "Juan Perez" en el campo "Full name"
  And El usuario ingresa "juan.perez@example.com" en el campo "Email"
  And El usuario ingresa "Password123*" en el campo "Password"
  And El usuario ingresa "Password123*" en el campo "Repeat your password"
  And El usuario hace clic en el botón "Sign up"
  Then El sistema debe permitir completar el registro correctamente
  And El usuario debe ver el mensaje "Successful registration" 
  And El usuario debe ser redirigido a la página de inicio de sesión en "https://test-qa.inlaze.com/auth/sign-in"