const route = require('./route');


/**
 * Init the module
 * @param  {Object} app [Expressjs App object]
 * @return {[null]}     [null]
 */
exports.init = (app) => {
    route.init(app);
};