Feature: Verificar que el email cumpla con el formato estandar
Scenario: El botón "Sign up" permanece deshabilitado cuando solo se ingresa una palabra en el campo "Full name"
  Given El usuario accede a la página de registro "https://test-qa.inlaze.com/auth/sign-up"
  And El formulario de registro está accesible
  And Los campos "Full name", "Email", "Password" y "Repeat your password" están habilitados
  When El usuario ingresa "Juan" en el campo "Full name"
  And El usuario ingresa "juan.perez@example.com" en el campo "Email"
  And El usuario ingresa "Password123!" en el campo "Password"
  And El usuario ingresa "Password123!" en el campo "Repeat your password"
  Then El botón "Sign up" está deshabilitado

Scenario: El botón "Sign up" se habilita cuando se ingresan dos palabras en el campo "Full name"
  Given El usuario accede a la página de registro "https://test-qa.inlaze.com/auth/sign-up"
  And El formulario de registro está accesible
  And Los campos "Full name", "Email", "Password" y "Repeat your password" están habilitados
  When El usuario ingresa "Juan Pérez" en el campo "Full name"
  And El usuario ingresa "juan.perez@example.com" en el campo "Email"
  And El usuario ingresa "Password123!" en el campo "Password"
  And El usuario ingresa "Password123!" en el campo "Repeat your password"
  Then El botón "Sign up" se habilita