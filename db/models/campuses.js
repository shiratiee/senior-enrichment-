const Sequelize = require('sequelize');
const db = require('../index');


const Campuses= db.define('Campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
},
  image: {
    type: Sequelize.STRING
  }
});

module.exports = Campuses;
