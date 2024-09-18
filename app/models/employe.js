module.exports = (sequelize, DataTypes) => {
  const Employe = sequelize.define('employe', {
    numemp: { type: DataTypes.STRING, primaryKey: true },
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING
  }, { tableName: 'employe', timestamps: false });

  return Employe;
};
