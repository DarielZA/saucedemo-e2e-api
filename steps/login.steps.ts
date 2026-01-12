import { Logout } from '../src/tasks/Logout';
import { IsOnLoginPage } from '../src/questions/IsOnLoginPage';

import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { User } from '../src/actors/User';
import { BrowseTheWeb } from '../src/abilities/BrowseTheWeb';

import { Login } from '../src/tasks/Login';

setDefaultTimeout(30 * 1000);

let actor: User;

Given('el usuario ingresa a SauceDemo', async function () {
  actor = new User('Standard User').whoCan(
    BrowseTheWeb.using(this.page)
  );

  await this.page.goto('https://www.saucedemo.com');
});

When('inicia sesión con credenciales válidas', async function () {
  await Login.withValidCredentials()(actor);
});

When('inicia sesión con credenciales inválidas', async function () {
  await Login.with('bad_user', 'bad_password')(actor);
});

Then('debe ver la pantalla de productos', async function () {
  // Validación simple y estable
  await this.page.waitForSelector('.inventory_list');
});

Then('debe ver un mensaje de error', async function () {
  await this.page.waitForSelector('[data-test="error"]');
});


When('cierra sesión', async function () {
  await Logout.perform()(actor);
});

Then('debe regresar a la pantalla de login', async function () {
  await IsOnLoginPage.visible()(actor);
});
