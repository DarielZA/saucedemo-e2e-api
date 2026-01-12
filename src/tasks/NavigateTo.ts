import { Actor } from '../actors/Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';
import { env } from '../config/env';

export class NavigateTo {
  static theSauceDemo() {
    return {
      performAs: async (actor: Actor) => {
        const page = actor.abilityTo(BrowseTheWeb).page;
        await page.goto(env.sauce.baseUrl);
      }
    };
  }
}
