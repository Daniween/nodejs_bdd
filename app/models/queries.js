const { Employe, Projet, Affectation, sequelize } = require('./index'); // Assure-toi du bon chemin d'import

// Fonction pour obtenir le projet avec le plus gros budget
async function getProjetMaxBudget() {
  try {
    const projet = await Projet.findOne({
      attributes: ['description', 'budget'],
      order: [['budget', 'DESC']],
      limit: 1
    });
    return projet;
  } catch (error) {
    console.error('Erreur lors de la récupération du projet avec le plus gros budget:', error);
    throw error;
  }
}

// Fonction pour les employés affectés à la fois sur les projets P01 et P03
async function getEmployesAffectesDeuxProjets() {
  try {
    const [results, metadata] = await sequelize.query(`
      SELECT e.nom, e.prenom 
      FROM Employe e
      JOIN Affectation a1 ON e.numemp = a1.numemp AND a1.numprojet = 'P01'
      JOIN Affectation a2 ON e.numemp = a2.numemp AND a2.numprojet = 'P03';
    `);

    return results;
  } catch (error) {
    console.error('Erreur lors de la récupération des employés affectés aux projets P01 et P03:', error);
    throw error;
  }
}

module.exports = { getProjetMaxBudget, getEmployesAffectesDeuxProjets };
