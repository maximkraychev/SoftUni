var Data1 = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.fulfilled = false;
    }
    return Data;
}());
var myData1 = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
