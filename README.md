# SauceDemo - E2E + API Test Automation with CI/CD

Automated E2E and API test suite for the purchase flow of the [SauceDemo](https://www.saucedemo.com) web app, built with the **Screenplay** pattern, **BDD with Cucumber**, and **CI/CD with GitHub Actions**.

---

## Test Architecture

Built on the **Screenplay** pattern for a clear separation of responsibilities:

- **actors**: represent the system's users
- **abilities**: what an actor can do (e.g. browse with Playwright)
- **tasks**: actions the actor performs (login, add product, checkout, logout)
- **questions**: assertions on the application's state
- **steps**: BDD step definitions (Cucumber)
- **features**: scenarios in Gherkin format
- **api**: automated API tests
- **.env**: environment configuration with test credentials (gitignored)

---

## E2E Tests (Web Frontend)

The E2E tests validate the core business flow on https://www.saucedemo.com.

### Scenarios covered:
1. Successful login
2. Failed login (invalid credentials)
3. Successful product purchase (happy path)
4. User logout

### Run the E2E tests
```bash
npm test
```

---

## API Tests (DummyJSON)

API tests built with **Playwright APIRequestContext** against https://dummyjson.com.

### What's validated:
- Login with at least 3 real users
- Service contract validation (`accessToken`, `refreshToken`)
- Full authentication flow:
  ```
  GET /users -> POST /auth/login -> GET /auth/me
  ```

### Run the API tests
```bash
npm run test:api
```

---

## CI/CD with GitHub Actions

Continuous integration via **GitHub Actions**, configured in:

```
.github/workflows/run-tests.yml
```

### The pipeline:
- Runs on every **push to main/master**
- Can be triggered manually from the GitHub UI
- Uses **Node.js 20**
- Installs dependencies and Playwright browsers
- Runs the E2E tests automatically

---

## Tools

- **TypeScript**
- **Playwright**
- **Cucumber (BDD)**
- **Playwright APIRequestContext**
- **GitHub Actions**
- **dotenv**

---

## Author

**Dariel Aguilar** - QA Engineer
