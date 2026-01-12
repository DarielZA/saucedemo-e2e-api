import { APIRequestContext } from '@playwright/test';

export class CallAnApi {
  constructor(public request: APIRequestContext) {}
}
