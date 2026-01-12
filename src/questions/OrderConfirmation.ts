import { expect } from '@playwright/test';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class OrderConfirmation {
  static shouldBeVisible() {
    return async (actor: any) => {
      const page = actor.abilityTo(BrowseTheWeb).page;

      await expect(
        page.locator('.complete-header')
      ).toContainText('Thank you for your order');
    };
  }
}
