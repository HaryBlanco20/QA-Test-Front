# Pruebas Automatizadas con Cypress y Cucumber

Este proyecto utiliza **Cypress** junto con **Cucumber** para realizar pruebas automatizadas. Las pruebas están escritas en formato Gherkin y se ejecutan utilizando Cypress como framework de pruebas.

## Requisitos

- **Node.js** (versión 14 o superior)
- **NPM** (viene instalado con Node.js)

## Instalación

1. **Clonar el repositorio:**
Primero, clona el repositorio en tu máquina local: git clone https://github.com/tu-usuario/nombre-repositorio.git

2. **Instalar las dependencias:**

Navega al directorio de tu proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

cd nombre-repositorio
npm install

**Configuración de Cucumber**
Este proyecto utiliza Cypress Cucumber Preprocessor para ejecutar pruebas escritas en formato Gherkin. Si aún no tienes configurado Cypress con Cucumber, sigue estos pasos:

1. **Instala el preprocesador de Cucumber para Cypress:**
   npm install --save-dev @badeball/cypress-cucumber-preprocessor
2. **Configura el preprocesador en Cypress. Abre cypress/plugins/index.js y agrega lo siguiente:**

const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    "specPattern": "**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  },
});

3. **Asegúrate de que los archivos .feature estén en la carpeta adecuada (por ejemplo, cypress/e2e/)**

**Ejecución de las pruebas**
Una vez que todo esté instalado y configurado, puedes ejecutar las pruebas de la siguiente manera:

1. **Ejecutar Cypress en modo interactivo:** 
   npx cypress open

Esto abrirá la interfaz de usuario de Cypress, donde podrás seleccionar y ejecutar las pruebas de manera visual.

#Documentación

# Documentación

[Casos de prueba](Documentacion/Casos_de_prueba.pdf)
[Automatización  de Casos de prueba con Cypress](Documentacion//Automatizacion_de_Casos_de_prueba_con_Cypress.pdf)

