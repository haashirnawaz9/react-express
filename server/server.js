const express = require('express')
const app = express();
const cors = require('cors')

const corsOptions = {
    origin: ['http://localhost:5173']
}

app.use(cors(corsOptions))

app.get('/api', (req, res) => {
    res.json({ fruits:["apple", "banana", "orange", "pineapple"] });
});

app.listen(3001, () => {
    console.log("Server is working at Port 3001")
})