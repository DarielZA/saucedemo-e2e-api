import { When, Then } from '@cucumber/cucumber';
import { User } from '../src/actors/User';
import { BrowseTheWeb } from '../src/abilities/BrowseTheWeb';

import { AddProductToCart } from '../src/tasks/AddProductToCart';
import { Checkout } from '../src/tasks/Checkout';
import { OrderConfirmation } from '../src/questions/OrderConfirmation';

let actor: User;

When('agrega un producto al carrito', async function () {
  actor = new User('Standard User').whoCan(
    BrowseTheWeb.using(this.page)
  );

  await AddProductToCart.firstProduct()(actor);
});

When('completa el proceso de checkout', async function () {
  await Checkout.complete()(actor);
});

Then('la compra debe completarse exitosamente', async function () {
  await OrderConfirmation.shouldBeVisible()(actor);
});
