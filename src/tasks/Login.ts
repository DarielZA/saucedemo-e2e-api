import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Login {

  static with(username: string, password: string) {
    return async (actor: any) => {
      const page = actor.abilityTo(BrowseTheWeb).page;

      await page.waitForSelector('#user-name', { timeout: 10000 });
      await page.fill('#user-name', username);
      await page.fill('#password', password);
      await page.click('#login-button');
    };
  }

  static withValidCredentials() {
    return Login.with('standard_user', 'secret_sauce');
  }
}
