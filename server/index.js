const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const EmployeeModel = require("./model/employee");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Password is incorrect");
        }
      } else {
        res.json("Invalid email or password");
      }
    })
    .catch(err => res.json(err));
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
