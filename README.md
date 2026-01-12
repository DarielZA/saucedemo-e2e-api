# SauceDemo – Automatización E2E + API con CI/CD

Este proyecto implementa una suite de **pruebas automatizadas E2E y de API** para validar el flujo de compra de la aplicación **SauceDemo**, aplicando buenas prácticas de automatización, el patrón **Screenplay**, **BDD con Cucumber** y **CI/CD con GitHub Actions**.

---

## 🧠 Arquitectura de Pruebas

Se implementó el patrón **Screenplay**, logrando una clara separación de responsabilidades:

- **actors**: Representan a los usuarios del sistema.
- **abilities**: Capacidades del actor (ej. navegar con Playwright).
- **tasks**: Acciones que el actor realiza (login, agregar producto, checkout, logout).
- **questions**: Validaciones del estado de la aplicación.
- **steps**: Definición de pasos BDD (Cucumber).
- **features**: Escenarios en formato Gherkin.
- **api**: Pruebas automatizadas de API.
- **.env**: Configuración de entorno con credenciales de prueba.

---

## 🧪 Pruebas E2E (Frontend Web)

Las pruebas E2E validan el flujo principal de negocio en **https://www.saucedemo.com**.

### Escenarios cubiertos:
1. **Login exitoso**
2. **Login fallido (credenciales inválidas)**
3. **Compra exitosa de un producto (camino feliz)**
4. **Logout del usuario**

### ▶️ Ejecutar pruebas E2E
```bash
npm test
```

---

## 🔗 Pruebas de API (DummyJSON)

Se implementaron pruebas de API usando **Playwright APIRequestContext** contra **https://dummyjson.com**.

### Validaciones realizadas:
- Login de **al menos 3 usuarios reales**
- Validación de **contrato del servicio**
  - `accessToken`
  - `refreshToken`
- Flujo completo de autenticación:
  ```
  GET /users → POST /auth/login → GET /auth/me
  ```

### ▶️ Ejecutar pruebas de API
```bash
npm run test:api
```

---

## ⚙️ CI/CD con GitHub Actions

El proyecto cuenta con integración continua mediante **GitHub Actions**, configurada en:

```
.github/workflows/run-tests.yml
```

### El pipeline:
- Se ejecuta en cada **push a main/master**
- Puede ejecutarse manualmente desde la UI de GitHub
- Usa **Node.js 20**
- Instala dependencias y navegadores de Playwright
- Ejecuta las pruebas E2E automáticamente

---

## 🛠️ Herramientas Utilizadas

- **TypeScript**
- **Playwright**
- **Cucumber (BDD)**
- **Playwright APIRequestContext**
- **GitHub Actions**
- **dotenv**

---

## 👤 Autor

**Dariel Aguilar**  
QA Automation
