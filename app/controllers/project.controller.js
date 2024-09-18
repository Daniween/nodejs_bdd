const queries = require('../models/queries.js'); // Corriger le chemin ici si nécessaire

// Fonction pour obtenir le projet avec le plus gros budget
exports.getProjetMaxBudget = async (req, res) => {
  try {
    const projet = await queries.getProjetMaxBudget();
    res.json(projet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fonction pour les employés affectés à la fois sur les projets P01 et P03
exports.getEmployesAffectesDeuxProjets = async (req, res) => {
  try {
    const employes = await queries.getEmployesAffectesDeuxProjets();
    res.json(employes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
