'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('token', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
      },
      alphanumeric: {
        type: Sequelize.STRING, 
        allowNull: false, 
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE, 
        allowNull: false 
      },
      updated_at: {
        type: Sequelize.DATE, 
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('token');
  }
};
