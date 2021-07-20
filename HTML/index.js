const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.get('/',req, res => {
    res.send('Hello World..');

});
const employeeRoutesb = require('D:\web\express-demo\employee.route');
app.listen(port, () => {
    console.log('Lintening on Port no. ${port}')}
    )