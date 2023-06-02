var Box = /** @class */ (function () {
    function Box() {
        this.boxes = [];
    }
    Box.prototype.add = function (element) {
        this.boxes.push(element);
    };
    Box.prototype.remove = function () {
        this.boxes.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count); // 3
var box2 = new Box();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count); // 2
box2.remove();
console.log(box2.count); // 1
