import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class IsOnLoginPage {
  static visible() {
    return async (actor: any) => {
      const page = actor.abilityTo(BrowseTheWeb).page;

      await page.waitForSelector('#login-button');
    };
  }
}
