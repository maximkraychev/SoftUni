function rageQuit(text) {

    /*
    01 One regExp to match all groups of elements and their modifier;
    02 Create a count so leter we can store how many unique symbols there will be;
    03 One For Of loop with every matching group;
        3.1 Another RegExp so we can separate the digits and the elements;
        3.2 We should upper case all elements;
        3.3 Check if modifier is equel to 0 then skip the rest and go to the next group;
        3.4 Check if any of the elements didn't exist in our final result, and if they don't add 1 to count;  
        3.5 Another loop(.repeat) so we can multyplay the elements by the given digit;
        3.6 Add the result we got from the current group to the final result;
    04 Print the final result;
    */

    text = text.toString();

    const regExp = /\D+\d+/g;
    const regExpSepratingDigitsFromTheRest = /(?<else>[^\d]+)(?<digit>\d+)/g;
    let finalResult = '';
    let count = Number();

    const groups = text.match(regExp);

    for (const group of groups) {

        const pearsArr = group.matchAll(regExpSepratingDigitsFromTheRest);
        let elements = '';
        let digit = '';

        for (const el of pearsArr) {
            elements = el.groups.else;
            digit = el.groups.digit
        }

        elements = elements.toUpperCase();
        digit = Number(digit);

        if (digit === 0) {
            continue
        }

        let temporaryVariable = '';

        for (const el of elements) {
            if (temporaryVariable.includes(el)) {
                continue
            }

            if (!finalResult.includes(el)) {
                count++;
                temporaryVariable += el;
            }
        }

        const finalTextFromTheCurrnetGroup = elements.repeat(digit);
        finalResult += finalTextFromTheCurrnetGroup
    }

    console.log(`Unique symbols used: ${count}`);
    console.log(finalResult);
}

// rageQuit('a3')

// rageQuit('aSd2&5s@1');

rageQuit('e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15');