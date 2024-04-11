class Key {
  protected signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(protected key: Key) {}
  getKey() {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  protected tenants: Person[] = [];
  constructor(protected key: Key) {}
  comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
