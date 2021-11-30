
function forEach(object, callback) {
    for (let property in object) {
        if (object.hasOwnProperty(property))
            callback(object[property], property);
    }
}

module.exports = {forEach};
