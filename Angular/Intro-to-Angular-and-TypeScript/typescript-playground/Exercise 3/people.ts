abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: string[];
    private currentTaskNumber: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
        this.currentTaskNumber = 0;
    }

    work(): void {
        console.log(this.tasks[this.currentTaskNumber]);
        this.currentTaskNumber == this.tasks.length - 1 ? this.currentTaskNumber = 0 : this.currentTaskNumber++;
    }

    collectSalary() {
        console.log(`${this.name} received ${this.salary} this month.`);
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(`${this.name} is working on a simple task.`);
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(`${this.name} is working on a complicated task.`);
        this.tasks.push(`${this.name} is taking time off work.`);
        this.tasks.push(`${this.name} is supervising junior workers.`);
    }
}

class Manager extends Employee {
    public dividend: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push(`${this.name} scheduled a meeting.`);
        this.tasks.push(`${this.name} is preparing a quarterly report.`);
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
    }
}

const person = new Manager('Pesho', 20);
person.work();
person.collectSalary();
person.salary = 1000;
person.dividend = 200;
person.collectSalary();
person.work();
person.work();
