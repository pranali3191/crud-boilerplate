const httpJSON = require('./http.json');
const dbJSON = require('./db.json');

const env = process.env.NODE_ENV || 'development';

const http = httpJSON[env];
const db = dbJSON[env];

module.exports = { http, db };
