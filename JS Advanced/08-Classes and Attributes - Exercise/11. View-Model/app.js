class Textbox {
    constructor(selector, regex) {
        this._value = '';
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
    };

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        
        for (let el of this.elements) {
            el.value = val;
        };
    };

    get elements() {
        return this._elements;
    };

    isValid() {
        if (this._value.match(this._invalidSymbols)) {
            return false;
        } else {
            return true;
        }
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });
