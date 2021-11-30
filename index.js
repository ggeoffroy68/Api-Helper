const api = require('./libs/api');
const mongoose = require('./libs/mongoose');

function ApiHelperPackage()  {

}

ApiHelperPackage.prototype.api = api;
ApiHelperPackage.prototype.mongoose = mongoose;

module.exports = new ApiHelperPackage();
