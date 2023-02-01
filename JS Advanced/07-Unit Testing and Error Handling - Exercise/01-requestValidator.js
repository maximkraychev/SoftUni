function requestValidator(obj) {

    const propertys = ['method', 'uri', 'version', 'message'];
    const errorProperty = {
        method: 'Method',
        uri: 'URI',
        version: 'Version',
        message: 'Message',
    }
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    // Check if there is missing property
    for (const prop of propertys) {
        if (!obj.hasOwnProperty(prop)) {
            throw new Error(`Invalid request header: Invalid ${errorProperty[prop]}`);
        }
    }
    // Throw an error if method dosn't meet the requirements;
    methodTest(obj.method);

    // Throw an error if uri dosn't meet the requirements;
    uriTest(obj.uri);

    // Throw an error if versions dosn't meet the requirements;
    versionTest(obj.version);

    // Throw an error if message dosn't meet the requirements;
    messageTest(obj.message);

    return obj;


    function methodTest(string) {
        if (!methods.includes(string)) {
            throw new Error('Invalid request header: Invalid Method');
        }
    }

    function uriTest(string) {
        if (!string.match(/^[a-zA-Z0-9\.*]+$/g)) {
            throw new Error('Invalid request header: Invalid URL');
        }
    }

    function versionTest(string) {
        if (!versions.includes(string)) {
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function messageTest(string) {
        if (!string.match(/^[^<>\\&\'\"]*$/g)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }
}

requestValidator({
    method: 'GET',
    uri: '*',
    version: 'HTTP/1.1',
    message: ''
}
)