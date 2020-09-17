const mongoose = require('mongoose');
const config = require('config');

const connectionURL = config.get('MONGODB_URI');

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
