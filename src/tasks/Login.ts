import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Login {
  static with(username: string, password: string) {
    return async (actor: any) => {
      const browse = actor.abilityTo(BrowseTheWeb);
      const page = browse.page;

      await page.goto('https://www.saucedemo.com/');
      await page.fill('#user-name', username);
      await page.fill('#password', password);
      await page.click('#login-button');
    };
  }
}
