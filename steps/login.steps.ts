import { Given, When, Then } from '@cucumber/cucumber';
import { User } from '../src/actors/User';
import { BrowseTheWeb } from '../src/abilities/BrowseTheWeb';
import { Login } from '../src/tasks/Login';
import { LoginResult } from '../src/questions/LoginResult';
import { LoginError } from '../src/questions/LoginError';


let actor: User;

Given('el usuario ingresa a SauceDemo', async function () {
  actor = new User('Dariel').whoCan(
    BrowseTheWeb.using(this.page)
  );
});

When('inicia sesión con credenciales válidas', async function () {
  await Login.with('standard_user', 'secret_sauce')(actor);
});

Then('debe ver la pantalla de productos', async function () {
  await LoginResult.shouldBeSuccessful()(actor);
});



When('inicia sesión con credenciales inválidas', async function () {
  await Login.with('bad_user', 'bad_password')(actor);
});

Then('debe ver un mensaje de error', async function () {
  await LoginError.shouldBeVisible()(actor);
});
