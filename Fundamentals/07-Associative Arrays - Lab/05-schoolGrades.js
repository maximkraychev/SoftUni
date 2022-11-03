function schoolGrades(input) {

    const objOfSchoolGrades = {};

    for (const line of input) {
        let lineArr = line.split(' ');
        const name = lineArr.shift();
        const grades = lineArr.join(', ')

        if (!objOfSchoolGrades.hasOwnProperty(name)) {
            objOfSchoolGrades[name] = grades;
        } else {
            objOfSchoolGrades[name] += ', ' + grades;
        }
    }

    const entriesOfObject = Object.entries(objOfSchoolGrades);
    const array = [];

    entriesOfObject.forEach(([name, grades]) => {
        grades = grades.split(', ').map(x => Number(x));
        let sumGrades = 0;
        grades.map(grade => sumGrades += grade);
        const gradesCounts = grades.length;
        const avrgGrade = sumGrades / gradesCounts;
        array.push([name, avrgGrade])
    })

    array.sort((a, b) => a[0].localeCompare(b[0]))

    for (const [name, grade] of array) {
        console.log(name + ': ' + grade.toFixed(2));
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);