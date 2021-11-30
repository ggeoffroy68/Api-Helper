const mongoose = require('mongoose');

function init(uri) {

    if (!uri)
        require('dotenv').config();

    let options = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true};

    mongoose.connect(uri, options);
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
}

module.exports = {model: require('./src/model.helper'), types: require('./src/types.helper'), init};
