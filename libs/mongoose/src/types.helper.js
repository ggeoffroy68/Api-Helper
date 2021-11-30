const ObjectId = require('mongoose').Types.ObjectId;

function simple(type, required = false, ref = undefined) {
    let obj =  {type: type, required: required};
    if (ref)
        obj['ref'] = ref;
    return obj;
}

function complex(name, refPath, options = [], required = true) {
    let obj = {};
    obj[name] = {type: ObjectId, required, refPath};
    obj[refPath] = {type: String, required, enum: options};
    return obj;
}

function enumMaker(type, options = [], required = true) {
    return {type, enum: options, required};
}

module.exports = {simple, complex, enumMaker, ObjectId};
