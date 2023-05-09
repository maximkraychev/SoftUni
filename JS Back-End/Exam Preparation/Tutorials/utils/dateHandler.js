module.exports = () => {
    const date = new Date();
    const firstPart = date.toString().slice(0, 10);
    const secondPart = date.toTimeString().slice(0, 8);
    
    return firstPart + ' ' + secondPart;
}