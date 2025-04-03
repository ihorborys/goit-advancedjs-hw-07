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
        // console.log('Added object key to person.key');
    }

    public getKey(): Key {
        return this.key;
    }
}


abstract class House {
    protected key: Key;
    public door: boolean = false;
    public tenants: Person[] = [];

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

    // public openDoor(key: Key): boolean {
    //     if (this.door) {
    //         this.door = true;
    //         console.log('Doors are open')
    //         return this.door;
    //     }
    //     console.log('Sorry, wrong key')
    //     return !this.door;
    // }

    // public comeIn(person: Person) {
    //
    //     if (person.getKey() === key) {
    //         this.tenants.push(person);
    //     }
    // }

}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};