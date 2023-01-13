function solution(input) {

    function closure() {
        const obj = {};
        return {
            create(name, inherits, name2) {
                obj[name] = inherits ? Object.create(obj[name2]) : {};
            },
            set(name, key, value) {
                obj[name][key] = value;
            },
            print(name) {
                const buff = [];
                for (const key in obj[name]) {
                    buff.push(`${key}:${obj[name][key]}`);
                }
                console.log(buff.join(','));
            }
        }
    }

    const methods = closure();

    input.forEach(line => {
        const [command, name, key, value] = line.split(' ');
        methods[command](name, key, value);
    });
}

solution(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)
