const express = require('express');
const app = express();

app.use('/images', express.static('images'));

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var upload = require('express-fileupload');
app.use(upload())

const routes = require('./routes.js');
const platform = require('./platform.js');

app.use('/', routes.crudRoute);

app.listen(platform.port, () => {
    console.log(`Listening to port ${platform.port}..`);
});
