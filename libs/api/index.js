function ApiHelper() {

}

ApiHelper.prototype.component = require('./src/component');
ApiHelper.prototype.AbstractService = require('./src/abstract.service');

ApiHelper.prototype.ConditionToRespond = require('./src/helper/response');
ApiHelper.prototype.Interface = require('./src/helper/interface');
ApiHelper.prototype.methods = require('./src/helper/methods');
module.exports = new ApiHelper();
