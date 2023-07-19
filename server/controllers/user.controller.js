const user = require("../models/user.model")
const company = require("../models/user.model")

module.exports = {

    Greet: (req, res) => {
        res.json({ message: "Hello World" });
    },

    newUser: (req, res) => {
        const user = createUser();
        res.json(user)
    }, 

    newCompany: (req, res) => {
        const company = createCompany();
        res.json(company)
    },
    newUserAndCompany: (req, res) => {
        res.json({ user, company });
    }
    
};

    

