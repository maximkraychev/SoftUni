function add(number) {

    let sum = number;

    const inner = function (a) {
        sum += a;
        return inner;
    };

    inner.toString = function () {
        return sum;
    };
    
    return inner;
}
console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());

