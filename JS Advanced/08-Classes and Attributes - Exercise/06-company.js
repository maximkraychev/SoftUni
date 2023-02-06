class Company {
    constructor() {
        this.departments = {};
        this.salaryes = {};
    }

    addEmployee(name, salary, position, department) {

        [name, salary, position, department].forEach(input => {
            if (input == '' || input == undefined || input == null) {
                throw new TypeError('Invalid input!');
            }
        })

        if (salary < 0) {
            throw new TypeError('Invalid input!');
        }


        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];

            this.salaryes[department] = {
                sumSalary: 0,
                employes: 0,
            }
        }

        this.departments[department].push({
            name,
            salary,
            position,
        })

        this.salaryes[department].sumSalary += salary;
        this.salaryes[department].employes += 1;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const [bestDepartmentName, avrg] = Object
            .entries(this.salaryes)
            .map(x => [x[0], x[1].sumSalary / x[1].employes])
            .sort((a, b) => b[1] - a[1])[0]

        const bestDepartmentToString = this.departments[bestDepartmentName]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .map(x => `${x.name} ${x.salary} ${x.position}`)
            .join('\n')

        const firstTwoRows = `Best Department is: ${bestDepartmentName}\nAverage salary: ${avrg.toFixed(2)}`;

        return firstTwoRows + '\n' + bestDepartmentToString;
    }
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
