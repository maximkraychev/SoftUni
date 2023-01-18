function rectangle(width, height, color) {

    color = color[0].toUpperCase() + color.substring(1);

    return {
        'width': width,
        'height': height,
        'color': color,
        calcArea() {
            return this.width * this.height;
        }
    }
}




let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
