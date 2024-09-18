module.exports = (sequelize, DataTypes) => {
    const Affectation = sequelize.define('affectation', {
      numemp: { type: DataTypes.STRING, primaryKey: true },
      numprojet: { type: DataTypes.STRING, primaryKey: true },
      heures: DataTypes.INTEGER
    }, { tableName: 'affectation', timestamps: false });
  
    return Affectation;
  };
  