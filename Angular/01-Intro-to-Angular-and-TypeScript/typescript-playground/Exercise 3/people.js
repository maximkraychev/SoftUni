var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
        this.currentTaskNumber = 0;
    }
    Employee.prototype.work = function () {
        console.log(this.tasks[this.currentTaskNumber]);
        this.currentTaskNumber == this.tasks.length - 1 ? this.currentTaskNumber = 0 : this.currentTaskNumber++;
    };
    Employee.prototype.collectSalary = function () {
        console.log("".concat(this.name, " received ").concat(this.salary, " this month."));
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push("".concat(_this.name, " is working on a simple task."));
        return _this;
    }
    return Junior;
}(Employee));
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push("".concat(_this.name, " is working on a complicated task."));
        _this.tasks.push("".concat(_this.name, " is taking time off work."));
        _this.tasks.push("".concat(_this.name, " is supervising junior workers."));
        return _this;
    }
    return Senior;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.dividend = 0;
        _this.tasks.push("".concat(_this.name, " scheduled a meeting."));
        _this.tasks.push("".concat(_this.name, " is preparing a quarterly report."));
        return _this;
    }
    Manager.prototype.collectSalary = function () {
        console.log("".concat(this.name, " received ").concat(this.salary + this.dividend, " this month."));
    };
    return Manager;
}(Employee));
var person = new Manager('Pesho', 20);
person.work();
person.collectSalary();
person.salary = 1000;
person.dividend = 200;
person.collectSalary();
person.work();
person.work();
