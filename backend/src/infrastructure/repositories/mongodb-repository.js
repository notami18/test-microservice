const mongoose = require("mongoose");
const dbName = "crudMicroService";
const uri = `mongodb+srv://andresnotami:mgrVIqB8HPfNWl5X@crudmicroservice.5uzwoes.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('[db connection] Database connected')
	})
	.catch( error => {
		console.error('[db connection] Connection failed', error.message)
	});

  module.exports = mongoose;
