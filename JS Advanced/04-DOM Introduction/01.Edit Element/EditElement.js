function editElement(refrence, match, replacer) {

    while (refrence.textContent.includes(match)) {
        refrence.textContent = refrence.textContent.replace(match, replacer);
    }

}