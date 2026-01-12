export class User {
  private abilities: any[] = [];

  constructor(public name: string) {}

  whoCan(...abilities: any[]) {
    this.abilities.push(...abilities);
    return this;
  }

  abilityTo<T>(abilityType: new (...args: any[]) => T): T {
    return this.abilities.find(a => a instanceof abilityType);
  }
}