function bonusScoringSystem(input) {

    input = input.map(x => Number(x));

    let numberOfTheStudents = input.shift();
    let numberOfTheLectures = input.shift();
    let additionalBonus = input.shift();

    let totalBonusForTheBestStudent = 0;
    let totalAttendanceForTheBestStudent = 0;

    for (let index = 0; index < numberOfTheStudents; index++) {
        
        let currentStudentAttendance = input[index];
        let totalBonus = currentStudentAttendance / numberOfTheLectures * (5 + additionalBonus);

        totalBonusForTheBestStudent = Math.max(totalBonusForTheBestStudent, totalBonus);

        if (totalBonusForTheBestStudent === totalBonus) {
            totalAttendanceForTheBestStudent = currentStudentAttendance;
        }
    }

    console.log(`Max Bonus: ${Math.round(totalBonusForTheBestStudent)}.`);
    console.log(`The student has attended ${totalAttendanceForTheBestStudent} lectures.`);
}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
);

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
);