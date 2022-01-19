const express = require('express');
const router = express.Router();

let User = require('../models/users.model');

router.route("/").get((request, response) => {
    User.find()
            .then(user => response.json(user))
            .catch(err => response.status(400).json("Error: " + err))
});

router.route("/add").post((request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    const password = request.body.password;

    const newUser = new User(
        {
            name,
            email,
            password,
        }
    );

    newUser.save()
        .then(() => response.json("successfully added user!"))
        .catch(err => response.status(400).json("Error: " + err))
})

module.exports = router;