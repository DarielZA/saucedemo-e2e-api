import { expect } from '@playwright/test';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class LoginError {
  static shouldBeVisible() {
    return async (actor: any) => {
      const page = actor.abilityTo(BrowseTheWeb).page;
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    };
  }
}
