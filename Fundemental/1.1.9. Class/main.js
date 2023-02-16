
class Animal {
    constructor(name) {
        // var _name = name;
        this.name = name;
    }

    color = 'red';
    __name = 'afsdf'

    talk() {
        // let __name = 'asdasd'
        console.log(_name);
        this.__name
     }

    hello() {
        console.log(`hello, I am ${JSON.stringify(this)}`);
        for (let i = 0; i < 3; i++) {
            console.log(this.talk());
        }
        this.breath()
    }

    _breath(){

    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = `dog ${name}`;
    }
    talk() {
        console.log('gâu');
    }
}

class Cat extends Animal {
    talk() {
        console.log('meo');
    }
}


const d1 = new Dog('Vàng');
const d2 = new Dog('Mic');
d1.hello()
// d1.breath()
console.log('aaaaaaaaaaaaaaa', d1.name, d2.name);

// const c1 = new Cat('Kitty');
// const c2 = new Cat('Mướp');
const a = new Animal('tan');
a.hello()

// const animals = [d1, d2, c1, c2];
// animals.forEach(a => a.hello());
