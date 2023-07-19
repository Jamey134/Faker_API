const { faker } = require('@faker-js/faker'); //This line imports the api


module.exports = {
    newUser: createUser = () => {
        newUser = {
            password: faker.internet.password(),
            email: faker.internet.email(),
            userNumber: faker.phone.number(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            _id: faker.string.uuid(),
        };
        return newUser;
    },

    newCompany: createCompany = () => {
        newCompany = {
            _id: faker.string.uuid(),
            name: faker.company.name(),
            address: {
                street: faker.location.street(),
                city: faker.location.city(),
                state: faker.location.state(),
                zipcode: faker.location.zipCode(),
                country: faker.location.country(),
            },
        };
        return newCompany
    }
}


//displays information 
// const newUser = createUser();
// console.log(newUser);




// //displays information 
// const newCompany = createCompany();
// console.log(newCompany);