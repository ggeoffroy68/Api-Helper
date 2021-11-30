const mongoose = require('mongoose');

function populated() {
    if (arguments.length < 1 || !(arguments[0] instanceof mongoose.Schema))
        throw new Error('You must pass an instance of mongoose.Schema');
    const schema = arguments[0];
    if (arguments.length < 2 || typeof arguments[1] !== 'string')
        throw new Error('You must pass an instance of mongoose.Schema');
    schema.pre(arguments[1], function (next) {
        for (let i = 2; i < arguments.length; i++)
            this.populate(arguments[i]);
        next();
    })
}

function factory(name, schema) {
    if (!(schema instanceof mongoose.Schema))
        throw new Error('Not a mongoose schema');
    return mongoose.model(name, schema);
}

module.exports = {factory, populated};
