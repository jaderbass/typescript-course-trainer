interface Sized {
    length: number;
}

class DataBox<Type extends Sized> {
    content: Type;

    constructor(input: Type) {
        this.content = input;
    }

    print() {
        console.log(this.content);
    }
}

const d1 = new DataBox('Hello');
d1.print();

const d5 = new DataBox([1, 2, 3]);
d5.print();

/* const d2 = new DataBox(42);
d2.print();

const d3 = new DataBox(true);
d3.print();

const d4 = new DataBox({ name: 'Hans', age: 45 });
d4.print(); */
