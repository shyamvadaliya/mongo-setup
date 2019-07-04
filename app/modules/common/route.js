const cors = require('cors');
const commonCtrl = require('./controller');


/**
 * Init route
 * @param  {[object]} app [expressJS app object]
 * @return {[null]}     [null]
 */
exports.init = (app) => {
	app.post('/api/v1/longitude-latitude', cors(), commonCtrl.longitudeLatitude);
};