const { Sequelize } = require('sequelize');

const db = new Sequelize('heroku_3871d6b35b07610', 'b287c247c406cf', 'f73d7a06', {
  host: 'us-cdbr-east-06.cleardb.net',
  dialect: 'mysql',
});

async function DatabaseConnection(){
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

DatabaseConnection()

module.exports = db;
