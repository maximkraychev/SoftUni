function formatGrade(grade) {

    if (grade < 3) {
        console.log(getGradeWithWords(grade));
    } else {
        console.log(`${getGradeWithWords(grade)} (${grade.toFixed(2)})`);
    }


    function getGradeWithWords(theGrade) {
        let gradeWithWords = '';

        if (theGrade < 3) {
            gradeWithWords = 'Fail (2)';
        } else if (theGrade < 3.50) {
            gradeWithWords = `Poor`;
        } else if (theGrade < 4.50) {
            gradeWithWords = `Good`;
        } else if (theGrade < 5.50) {
            gradeWithWords = `Very good`;
        } else {
            gradeWithWords = `Excellent`;
        }

        return gradeWithWords;
    }

}

formatGrade(0);