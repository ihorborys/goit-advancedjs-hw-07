class Key {
    private signature: number;

    constructor() {
        // Генеруємо випадкове 6 - значне число
        this.signature = Math.floor(100000 + Math.random() * 900000);
        console.log('New key created');
    }

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: {};

    constructor(key: Key) {
        this.key = key;
        console.log('Added object key to person.key');
    }

    public getKey(): {} {
        return this.key;
    }
}

abstract class House {
    protected key: Key;

    public door: boolean;

    public comeIn(): void;

    public abstract openDoor(key: Person): void;
}

class MyHouse extends House {
    public tenant: [];

    constructor(key: Key) {
        super();
        this.key = key;
    }

    public openDoor(key: Person) {
        if (person.getKey() === key) {
            console.log('Doors are open')
            return this.door;
        }
    }

    // public comeIn() {
    //     if (this.door) {
    //         console.log('Welcome home');
    //         return this.tenant.push(person);
    //     }
    //     console.log('Sorry, wrong key')

}


// const key = new Key()
// console.log(key)
//
// const person = new Person(key);
// console.log(person.getKey())
// console.log(person.getKey() === key)
//
// const house = new MyHouse();
// console.log(house.openDoor())

// const key = new Key();
//
// const house = new MyHouse(key);

//
// house.openDoor(person.getKey());
//
// house.comeIn(person);

// interface IKey {
//     signature: number;
//
//     getSignature(): number;
// }
//
// class Key implements IKey {
//     private signature: number;
//
//     constructor() {
//         this.signature = Math.floor(100000 + Math.random() * 900000);
//     }
//
//     public getSignature(): number {
//         return this.signature;
//     }
// }

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
//
// house.comeIn(person);


export {};