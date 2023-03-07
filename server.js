const express = require('express');
// const cors = require('cors');

const app = express();
const port = 3000;

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
// app.user(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});