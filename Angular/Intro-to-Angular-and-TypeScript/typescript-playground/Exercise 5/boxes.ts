class Box<T>{
    private boxes: T[] = [];

    add(element: T): void {
        this.boxes.push(element);
    }

    remove(): void {
        this.boxes.pop();
    }

    get count(): number {
        return this.boxes.length;   
    }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);  // 3


let box2 = new Box<String>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count); // 2
box2.remove();
console.log(box2.count); // 1

