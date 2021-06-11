"use strict";
module.exports = {
    "name": "default",
    "type": "postgres",
    "host": process.env.HOST,
    "port": process.env.DB_PORT,
    "username": process.env.USER,
    "password": process.env.PASS,
    "database": process.env.DATABASE,
    "entities": [
        "dist/models/**/*.js"
    ],
    "migrations": [
        "dist/database/migrations/**/*.js"
    ],
    "cli": {
        "migrationsDir": [
            "dist/database/migrations/"
        ],
        "entitiesDir": "dist/models"
    }
};
