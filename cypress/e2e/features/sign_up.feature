Feature: Validar que el campo "Full name" acepte mínimo 2 palabras
Scenario: El botón "Sign up" permanece deshabilitado cuando solo se ingresa una palabra en el campo "Full name"
  Given El formulario de registro está accesible
  And Los campos "Full name", "Password" y "Repeat your password" están habilitados
  When El usuario ingresa "Juan" en el campo "Full name"
  And el usuario ingresa "juan.perez@example.com" en el campo "Email"
  And el usuario ingresa "Password123!" en el campo "Password"
  And el usuario ingresa "Password123!" en el campo "Repeat your password"
  Then El botón "Sign up" permanece deshabilitado

Scenario: El botón "Sign up" se habilita cuando se ingresan dos palabras en el campo "Full name"
  Given El formulario de registro está accesible
  And Los campos "Full name", "Password" y "Repeat your password" están habilitados
  When El usuario ingresa "Juan Perez" en el campo "Full name"
  And el usuario ingresa "juan.perez@example.com" en el campo "Email"
  And el usuario ingresa "Password123!" en el campo "Password"
  And el usuario ingresa"Pasword123!" en el campo "Repeat your password"
  Then El botón "Sign up" se habilita