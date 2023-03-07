const express = require('express');
const app = express();
const port = 3000;

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});