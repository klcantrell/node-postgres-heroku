module.exports = (sequelize, DataTypes) => {
  var Character = sequelize.define('Character', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    weapon: DataTypes.STRING
  }, {});
  Character.associate = function(models) {
    // associations can be defined here
  };
  return Character;
};