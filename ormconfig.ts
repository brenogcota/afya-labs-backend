module.exports = {
  "name": "default",
  "type": "postgres",
  "host": process.env.HOST,
  "port": process.env.PORT,
  "username": process.env.USER,
  "password": process.env.PASS,
  "database": process.env.DATABASE,
  "entities": [
    "src/models/**/*.ts"
 ],
 "migrations": [
  "src/database/migrations/**/*.ts"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}
