const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const { a, b, cmd } = req.query;
    let result;
    let operator;

    // Thực hiện phép tính
    switch (cmd) {
        case 'add':
            result = parseFloat(a) + parseFloat(b);
            operator = '+';
            break;
        case 'sub':
            result = parseFloat(a) - parseFloat(b);
            operator = '-';
            break;
        case 'mul':
            result = parseFloat(a) * parseFloat(b);
            operator = '*';
            break;
        case 'div':
            if (parseFloat(b) !== 0) {
                result = parseFloat(a) / parseFloat(b);
                operator = '/';
            } else {
                return res.send('Error: Division by zero');
            }
            break;
        default:
            return res.send('Error: Invalid operation');
    }

    // Trả về kết quả dưới dạng HTML
    res.send(`
        <h1>Calculator Result</h1>
        <p>${a} ${operator} ${b} = ${result}</p>
    `);
});

app.post('/', (req, res) => {
    const { a, b, cmd } = req.body;
    let result;
    let operator;

    // Thực hiện phép tính
    switch (cmd) {
        case 'add':
            result = parseFloat(a) + parseFloat(b);
            operator = '+';
            break;
        case 'sub':
            result = parseFloat(a) - parseFloat(b);
            operator = '-';
            break;
        case 'mul':
            result = parseFloat(a) * parseFloat(b);
            operator = '*';
            break;
        case 'div':
            if (parseFloat(b) !== 0) {
                result = parseFloat(a) / parseFloat(b);
                operator = '/';
            } else {
                return res.send('Error: Division by zero');
            }
            break;
        default:
            return res.send('Error: Invalid operation');
    }

    // Trả về kết quả dưới dạng HTML
    res.send(`
        <h1>Calculator Result</h1>
        <p>${a} ${operator} ${b} = ${result}</p>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
