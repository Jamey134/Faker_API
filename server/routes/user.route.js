
const userController = require("../controllers/user.controller")
// req is shorthand for request and contains data about the request that the client sent to the server
// res is shorthand for response and is what the response is going to send back to the client.
// res.json is telling Express to send a json (javascript) res 

module.exports = app => {


    app.get("/api", userController.Greet);
    
    app.get("/api/users/new", userController.newUser);
    
    app.get("/api/companies/new", userController.newCompany);
    
    app.get("/api/user/company/new", userController.newUserAndCompany);

}

