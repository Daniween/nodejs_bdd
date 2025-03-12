module.exports = (sequelize, DataTypes) => {
    const Projet = sequelize.define('projet', {
      numprojet: { type: DataTypes.STRING, primaryKey: true },
      description: DataTypes.STRING,
      budget: DataTypes.DECIMAL
    }, { tableName: 'projet', timestamps: false });
  
    return Projet;
  };
  