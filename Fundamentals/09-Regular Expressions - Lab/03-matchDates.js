function matchDates(text) {

    const regiX = /\b(?<day>[0-9]{2})(?<separator>[.\-/])(?<month>[A-Z]{1}[a-z]{2})\k<separator>(?<year>[0-9]{4})\b/g;

    const matches = text[0].matchAll(regiX);

    for (const match of matches) {
        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);

matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);