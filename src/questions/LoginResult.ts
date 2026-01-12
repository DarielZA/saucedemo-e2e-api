import { expect } from '@playwright/test';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class LoginResult {
  static shouldBeSuccessful() {
    return async (actor: any) => {
      const page = actor.abilityTo(BrowseTheWeb).page;
      await expect(page).toHaveURL(/inventory/);
    };
  }
}

