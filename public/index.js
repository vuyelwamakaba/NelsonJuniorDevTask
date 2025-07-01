const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Sort String API</h1>
                <form action="/sort-string" method="post">
                    <input type="text" name="data" placeholder="Enter a string">
                    <button type="submit">Sort String</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/sort-string', (req, res) => {
    const { data } = req.body;
    if (!data) {
        return res.status(400).json({ error: 'Missing "data" field in request body' });
    }

    const charArray = data.split('');
    const sortedArray = charArray.sort((a, b) => a.localeCompare(b));

    res.json({ word: sortedArray });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});