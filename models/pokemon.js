'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pokemon.init({
    name: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    image3: DataTypes.STRING,
    move: DataTypes.STRING,
    damage: DataTypes.STRING,
    image4: DataTypes.STRING,
    move1: DataTypes.STRING,
    damage1: DataTypes.STRING,
    weakness: DataTypes.STRING,
    resistance: DataTypes.STRING,
    retreatcost: DataTypes.STRING,
    image: DataTypes.STRING,
    image5: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemontable',
    timestamps:false
  });
  return Pokemon;
};