const express = require('express');
const app = express();
const port = 8000;


const faker  = require('@faker-js/faker') //This line imports the api

const createUser = () => {
    return {

    }
}





// req is shorthand for request and contains data about the request that the client sent to the server
// res is shorthand for response and is what the response is going to send back to the client.
// res.json is telling Express to send a json (javascript) res 
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/user", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.post("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen( port, () => console.log("SERVER ONLINE"))