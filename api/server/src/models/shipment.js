'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    static associate(models) {
      Shipment.hasMany(models.Orders)
    }
  };
  Shipment.init({
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Shipment',
  });
  return Shipment;
};