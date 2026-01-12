import { setWorldConstructor } from '@cucumber/cucumber';
import { Page } from '@playwright/test';

export class CustomWorld {
  page!: Page;
}

setWorldConstructor(CustomWorld);
