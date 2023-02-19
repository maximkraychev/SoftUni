function solution() {
    // class Employee

    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
        this.currentResponsibilities = 0
    }

    Employee.prototype = Object.create({});

    Employee.prototype.work = function () {
        console.log(this.tasks[this.currentResponsibilities]);
        this.currentResponsibilities++;
        if (this.tasks[this.currentResponsibilities] == undefined) {
            this.currentResponsibilities = 0;
        }
    }

    Employee.prototype.collectSalary = function () {
        let sumSalary = this.salary;
        if (this.dividend) {
            sumSalary += this.dividend;
        }
        console.log(`${this.name} received ${sumSalary} this month.`);
    }

    // class Junior ----------------------------------------------------------
    function Junior(name, age) {
        Employee.call(this, name, age);
        this.tasks.push(`${this.name} is working on a simple task.`);
    }
    Junior.prototype = Object.create(Employee.prototype);

    // class Senior -----------------------------------------------------------
    function Senior(name, age) {
        Employee.call(this, name, age);
        this.tasks.push(`${this.name} is working on a complicated task.`);
        this.tasks.push(`${this.name} is taking time off work.`);
        this.tasks.push(`${this.name} is supervising junior workers.`);
    }
    Senior.prototype = Object.create(Employee.prototype);

    // class Manager -----------------------------------------------------------
    function Manager(name, age) {
        Employee.call(this, name, age);
        this.tasks.push(`${this.name} scheduled a meeting.`);
        this.tasks.push(`${this.name} is preparing a quarterly report.`);
        this.dividend = 0
    }
    Manager.prototype = Object.create(Employee.prototype);

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    }
}



const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();


