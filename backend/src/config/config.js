require('dotenv').config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

module.exports = {
  "development": {
    "username": DB_USER || "root",
    "password": DB_PASSWORD || '123456',
    "database": DB_NAME || "cashforce_v3",
    "host": DB_HOST || "localhost",
    "port": DB_PORT || 3002,
    "dialect": "mysql",
  },
  "test": {
    "username": DB_USER || "root",
    "password": DB_PASSWORD || '123456',
    "database": DB_NAME || "cashforce_v3",
    "host": DB_HOST || "localhost",
    "port": DB_PORT || 3002,
    "dialect": "mysql",
  },
  "production": {
    "username": DB_USER || "root",
    "password": DB_PASSWORD || '123456',
    "database": DB_NAME || "cashforce_v3",
    "host": DB_HOST || "localhost",
    "port": DB_PORT || 3002,
    "dialect": "mysql",
  }
}
