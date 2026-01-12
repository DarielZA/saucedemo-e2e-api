export class Actor {
  constructor(public name: string) {}

  abilities: any[] = [];

  whoCan(...abilities: any[]) {
    this.abilities.push(...abilities);
    return this;
  }

  abilityTo<T>(ability: new (...args: any[]) => T): T {
    const found = this.abilities.find(a => a instanceof ability);
    if (!found) {
      throw new Error(`${this.name} does not have ability ${ability.name}`);
    }
    return found;
  }
}
