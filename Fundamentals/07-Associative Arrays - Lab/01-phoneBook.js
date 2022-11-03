function phoneBook(input) {

    // const objPhoneBook = {};

    // for(const line of input) {
    //     const [name, number] = line.split(' ');
    //     objPhoneBook[name] = number;
    // }

    // for(const key in objPhoneBook) {
    //     console.log(`${key} -> ${objPhoneBook[key]}`);
    // }


    // With maps

    const mapPhoneBook = new Map();

    for (const line of input) {
        const [name, number] = line.split(' ');
        mapPhoneBook.set(name, number)
    }

    mapPhoneBook.forEach((number, name) => {
        console.log(`${name} -> ${number}`);
    })
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)
