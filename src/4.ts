class Key {
    private signature: number;

    constructor() {
        // Генеруємо випадкове 6 - значне число
        this.signature = Math.floor(100000 + Math.random() * 900000);
        console.log(`New key created: ${this.signature}`);
    }

    public getSignature(): number {
        return this.signature;
    }
}


class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    public getKey(): Key {
        return this.key;
    }
}


abstract class House {
    public door: boolean = false;
    public tenants: Person[] = [];
    protected key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    public abstract openDoor(key: Key): void;

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Person entered the house');
        } else {
            console.log('Door is closed. Person cannot enter.');
        }
    }
}


class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    public openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            console.log('Doors are open');
        } else {
            console.log('Sorry, wrong key');
        }
    }
}


// ПЕРЕВІРКИ
const key = new Key();
// const key2 = new Key();

const house = new MyHouse(key);

const person = new Person(key);
// const person = new Person(key2);

house.openDoor(person.getKey());

house.comeIn(person);


export {};