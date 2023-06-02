abstract class Melon {
    public weight: number;
    public melonSort: string;
    public element: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): string {
        return `
        Element: ${this.element}
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}`
    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Water';
    }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Fire';
    }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Earth';
    }
}

class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Air';
    }
}

class Melolemonmelon extends Watermelon {
    private elements: string[] = ['Water', 'Fire', 'Earth', 'Air'];
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.morph();
    }

    morph(): void {
        const currentElement = this.elements.shift();
        this.elements.push(currentElement);
        this.element = currentElement;
    }
}

let melolemonmelon: Melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());


