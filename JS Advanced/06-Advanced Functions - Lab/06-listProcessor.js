function solution(data) {

    function methods (){

        let collection = [];

        return {
            add(string) {
                collection.push(string);
            },
            remove(string) {
                collection = collection.filter(x => x !== string);
            },
            print() {
                console.log(collection.join(','));
            }
        }
    }

    const obj = methods();

    data.forEach(x => {
        const [command, str] = x.split(' ');
        obj[command](str);
    })
}

solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);