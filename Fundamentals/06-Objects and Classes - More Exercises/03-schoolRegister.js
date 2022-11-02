function schoolRegister(listWithInformation) {

    let gradesWithAllStudends = {};

    listWithInformation.forEach(line => {

        let [studentName, grade, score] = line.split(', ');

        studentName = studentName.split(': ')[1];
        grade = Number(grade.split(': ')[1]);
        score = Number(score.split(': ')[1]);

        if (score >= 3) {
            let student = { studentName, score };
            grade++

            if (!gradesWithAllStudends.hasOwnProperty(grade)) {
                gradesWithAllStudends[grade] = []
            }

            gradesWithAllStudends[grade].push(student);
        }
    })

    let sortedGrades = Object.keys(gradesWithAllStudends).sort((a, b) => a - b);

    for (grade of sortedGrades) {
        let score = 0;
        let names = [];
        let countOfStudents = 0

        for (el of gradesWithAllStudends[grade]) {
            score += el.score;
            names.push(el.studentName);
            countOfStudents++
        }
        let averageScore = score / countOfStudents
        console.log(`${grade} Grade\nList of students: ${names.join(', ')}\nAverage annual score from last year: ${averageScore.toFixed(2)}\n`);
    }
}

schoolRegister([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    );

// schoolRegister([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ]
// )