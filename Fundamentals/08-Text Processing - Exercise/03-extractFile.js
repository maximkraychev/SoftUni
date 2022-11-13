function extractFile(path) {

    const nameAndExtension = path.split('\\').pop()
    const lastIndexOfDot = nameAndExtension.lastIndexOf('.');
    const name = nameAndExtension.substring(0, lastIndexOfDot);
    const extension = nameAndExtension.slice(lastIndexOfDot + 1)
    console.log(`File name: ${name}\nFile extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')