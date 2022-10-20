function softUniReception(input) {

    let studentsCount = Number(input.pop())
    let hoursNeeded = Number();
    let trakingHoursWhenTotakeBreak = 0

    let employeesEfficiencyPerHour = 0;

    input.forEach(el => {
        employeesEfficiencyPerHour += Number(el);
    })

    while (studentsCount > 0) {

        if (trakingHoursWhenTotakeBreak % 3 === 0 && trakingHoursWhenTotakeBreak !== 0) {
            hoursNeeded++
            trakingHoursWhenTotakeBreak = 0;
        } else {
            hoursNeeded++
            studentsCount -= employeesEfficiencyPerHour
            trakingHoursWhenTotakeBreak++
        }

    }

    console.log(`Time needed: ${hoursNeeded}h.`);

}

softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);