const express = require('express');
const routes = require('./router/index');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3030, () => {
    console.log('Server running on port 3030');
});