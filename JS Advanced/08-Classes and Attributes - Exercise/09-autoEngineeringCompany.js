function autoEngineeringCompany(input) {

    const register = {};

    input.forEach(line => {
        const [carBrand, carModel, quantity] = line.split(' | ');

        if (register.hasOwnProperty(carBrand) == false) {
            register[carBrand] = {};
        }
        if (register[carBrand].hasOwnProperty(carModel) == false) {
            register[carBrand][carModel] = 0;
        }
        
        register[carBrand][carModel] += Number(quantity);
    })

    for(const brand in register) {
        console.log(brand);
        for(const [model, quantity] of Object.entries(register[brand])) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])