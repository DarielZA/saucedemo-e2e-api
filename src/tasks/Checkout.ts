import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Checkout {
  static complete() {
    return async (actor: any) => {
      const page = actor.abilityTo(BrowseTheWeb).page;

      // Ir al carrito
      await page.click('.shopping_cart_link');

      // Checkout
      await page.click('[data-test="checkout"]');

      // Información del usuario
      await page.fill('[data-test="firstName"]', 'John');
      await page.fill('[data-test="lastName"]', 'Doe');
      await page.fill('[data-test="postalCode"]', '12345');

      await page.click('[data-test="continue"]');

      // Finalizar compra
      await page.click('[data-test="finish"]');
    };
  }
}
