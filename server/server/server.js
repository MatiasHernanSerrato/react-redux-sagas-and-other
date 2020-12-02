const express = require('express');
const routes = require('./router');

const app = express();

app.use(routes);

app.listen(3030, () => {
    console.log('Server running on port 3030');
});