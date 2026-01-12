import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Logout {
  static perform() {
    return async (actor: any) => {
      const page = actor.abilityTo(BrowseTheWeb).page;

      // Abrir menú
      await page.click('#react-burger-menu-btn');

      // Esperar opción logout
      await page.waitForSelector('#logout_sidebar_link');

      // Click en logout
      await page.click('#logout_sidebar_link');
    };
  }
}
