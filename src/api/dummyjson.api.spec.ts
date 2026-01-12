import { request, expect } from '@playwright/test';

const BASE_URL = 'https://dummyjson.com';

(async () => {
  const apiContext = await request.newContext({
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  console.log('🔹 Starting DummyJSON API tests');

  /**
   * 1️⃣ Obtener usuarios reales (flujo)
   */
  const usersResponse = await apiContext.get('/users?limit=3');
  expect(usersResponse.status()).toBe(200);

  const usersBody = await usersResponse.json();
  expect(usersBody).toHaveProperty('users');
  expect(usersBody.users.length).toBeGreaterThanOrEqual(3);

  /**
   * 2️⃣ Login de al menos 3 usuarios reales
   *    + validación de contrato
   *    + flujo autenticado
   */
  for (const user of usersBody.users.slice(0, 3)) {
    console.log(`🔐 Testing login for user: ${user.username}`);

    const loginResponse = await apiContext.post('/auth/login', {
      data: {
        username: user.username,
        password: user.password,
      },
    });

    expect(loginResponse.status()).toBe(200);

    const loginBody = await loginResponse.json();

    /**
     * ✅ Validaciones de contrato (DummyJSON real)
     */
    expect(loginBody).toHaveProperty('accessToken');
    expect(typeof loginBody.accessToken).toBe('string');

    expect(loginBody).toHaveProperty('refreshToken');
    expect(typeof loginBody.refreshToken).toBe('string');

    expect(loginBody).toHaveProperty('id');
    expect(loginBody).toHaveProperty('username');
    expect(loginBody.username).toBe(user.username);

    /**
     * 3️⃣ Flujo autenticado → obtener usuario logueado
     */
    const meResponse = await apiContext.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${loginBody.accessToken}`,
      },
    });

    expect(meResponse.status()).toBe(200);

    const meBody = await meResponse.json();
    expect(meBody).toHaveProperty('username');
    expect(meBody.username).toBe(loginBody.username);

    console.log(`✅ API flow OK for user: ${loginBody.username}`);
  }

  await apiContext.dispose();
})();
