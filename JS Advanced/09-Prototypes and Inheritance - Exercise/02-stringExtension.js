(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        const regex = new RegExp(`^${str}`, 'g');
        if (regex.test(this)) {
            return this.valueOf(this);
        } else {
            return str + this;
        }
    }

    String.prototype.ensureEnd = function (str) {
        const regex = new RegExp(`${str}$`, 'g');
        if (regex.test(this)) {
            return this.valueOf(this);
        } else {
            return this + str;
        }
    }

    String.prototype.isEmpty = function () {
        if (this == '') {
            return true;
        } else {
            return false
        }
    }

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (n < 4) {
            return ".".repeat(n);
        } else {
            let lastIndex = this.substring(0, n - 2).lastIndexOf(" ");
            if (lastIndex !== -1) {
                return this.substring(0, lastIndex) + "...";
            } else {
                return this.substring(0, n - 3) + "...";
            }
        }
    };

    String.format = function (string, ...params) {
        params.forEach(x => {
            string = string.replace(/{[0-9+]}/, x);
        })
        return string;
    }
})();

