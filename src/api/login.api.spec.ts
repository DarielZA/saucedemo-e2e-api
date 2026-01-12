import { request, expect } from '@playwright/test';

const users = [
  { username: 'kminchelle', password: '0lelplR' },
  { username: 'atuny0', password: '9uQFF1Lh' },
  { username: 'johndoe', password: '123456' }
];

for (const user of users) {
  test(`Login API for ${user.username}`, async () => {
    const context = await request.newContext();

    const response = await context.post('https://dummyjson.com/auth/login', {
      data: user
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('token');
  });
}
