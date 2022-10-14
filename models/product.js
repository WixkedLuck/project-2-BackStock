const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Products extends Model {

}

Products.init(
    {
        // product needs unique id 
        Productid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //product needs a name 
        ProductName:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //product needs a quantity amount 
        Quantity: {
            type: DataTypes.INTEGER,

        }
    }, 
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Products'
      }
);

module.exports = Products; 