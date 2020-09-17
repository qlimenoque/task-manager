const mongoose = require('mongoose');

const databaseName = 'task-manager-api';
const connectionURL = `mongodb+srv://{username}:{password}@cluster0-eucd5.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
