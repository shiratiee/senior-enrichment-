
const Sequelize = require('sequelize');
const db = require('../index.js');

const Student = db.define('Student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate :{
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    }
});

module.exports = Student
