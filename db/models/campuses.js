const Sequelize = require('sequelize');
const db = require('../index');


const campuses= db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
},
  image: {
    type: Sequelize.STRING
  }
});

module.exports = campuses;
