'use strict';

module.exports = {
<<<<<<< HEAD
	db: 'mongodb://localhost/benapp-travis',
	port: 3001,
	app: {
		title: 'BenApp - Travis Environment'
=======
	db: 'mongodb://localhost/mean-travis',
	port: 3001,
	app: {
		title: 'MEAN.JS - Travis Environment'
>>>>>>> 635204acf7619b012d460dc3bf44724f171e3c31
	},
	facebook: {
		clientID: 'APP_ID',
		clientSecret: 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: 'CONSUMER_KEY',
		clientSecret: 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: 'APP_ID',
		clientSecret: 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: 'APP_ID',
		clientSecret: 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};