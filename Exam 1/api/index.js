const server = require('./app.js');
const {conn} = require('./db.js');

// Syncing all the models at once.
conn.sync({force: false}).then(() => {
	server.listen(3005, () => {
		console.log('%s listening at 3005'); // eslint-disable-line no-console
	});
});