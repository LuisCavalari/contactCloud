'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contacts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      }, UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt:{
        type: Sequelize.DATE  , 
        allowNull:false,  
      },
      updatedAt:{
        type: Sequelize.DATE  , 
        allowNull:false,  
      }
      
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contacts')
  }
};
