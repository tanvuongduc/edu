
class Animal {
    constructor(name) {
        // var _name = name;
        this.name = name;
    }

    color = 'red';
    nickname = 'afsdf'

    talk() {
        // let nickname = 'asdasd'
        console.log(this.name);
        this.nickname
    }

    hello() {
        console.log('Hello, my name is:', this.name);
        // console.log(`hello, I am ${JSON.stringify(this)}`);
        // for (let i = 0; i < 3; i++) {
        //     console.log(this.talk());
        // }
        // this.breath()
    }

    _breath() {

    }
}

// let a1 = new Animal('Milu')
// console.log('aaaaaaaaaa', a1);
// a1.color;

// let date = new Date()
// date.getDate();
// function test(){
//     console.log('aaaaaaaaaaaaaa');
// }

// test();

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = `dog ${name}`;
    }
    talk() {
        super.talk();
        console.log('gâu');
    }
}

class Cat extends Animal {
    talk() {
        console.log('meo');
    }
}

// let mika = new Dog('Mika')
// console.log('aaaaaaaaaaaaa', mika);
// mika.talk();
// mika.hello();

// let meo = new Cat('ABC');
// console.log('bbbbbbbbbbbbb', meo);
// meo.hello();

class Vehicle {
    constructor(engineType, material) {
        this.engineType = engineType;
        this.material = material;
    }

    engineType = '';
    material = '';
    status = 'stoped';

    Start(method) {
        if (method != 'auto' && method != 'manual') {
            console.log('11111111111111');
            return false;
        }
        else {
            console.log('2222222222222222');
            this.status = 'running';
            return true;
        }
    };

    Break(method) {
        if (method != 'auto' && method != 'manual')
            return false;
        else {
            this.status = 'stoped';
            return true;
        }
    };
}

class Ship extends Vehicle {
    constructor(engineType, material, loadCapacity) {
        super(engineType, material)
        this.engineType = engineType;
        this.material = material;
        this.loadCapacity = loadCapacity;
    }


}

let ship1 = new Ship('Electricity', 'Metal', 10000)
let ship2 = new Ship('Diesel', 'Metal', 100)

console.log('aaaaaaaaaaaaaaa', ship1, ship2);
ship1.Start('auto');
console.log('bbbbbbbbbbbbbbb', ship1, ship2);


