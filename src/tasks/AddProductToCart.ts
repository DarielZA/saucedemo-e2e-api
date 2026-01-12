import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class AddProductToCart {
  static firstProduct() {
    return async (actor: any) => {
      const page = actor.abilityTo(BrowseTheWeb).page;

      // Agrega el primer producto disponible
      await page.click('.inventory_item button');
    };
  }
}
