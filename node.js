const express = require('express');
const express = require('express/lib/resonse');

const app = express();

app.use(express.json());

app.post('/add', (req,res) =>{
    console.log(req.body);
    const { num1, num2 } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json ({error: 'please provide valid numbers for num1 and num2'});
    }
    const result = num1 + num2;
    res.json({ result });
});

app.post ('/substract', (req, res) => {
    const { num1, num2 } = req.body;
    const result =  num1 - num2;
    res.json({ result });
});

app.post ('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const result =  num1 - num2;
    res.json({ result });
});

app.post ('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    const result =  num1 - num2;
    res.json({ result });
});

app.listen(3000, () => {
    console.log('server is lisening on port 3000');
});