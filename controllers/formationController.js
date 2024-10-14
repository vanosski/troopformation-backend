const Formation = require('../models/formationmodel');

const calculateFormation = async (req, res) => {
    const { name, troopTypes, totalTroops, numGuards, troops } = req.body;

    // Extract troop details
    const types = troops.map(troop => troop.type);
    const dead = troops.map(troop => troop.dead || 0.1);
    const wounded = troops.map(troop => troop.wounded || 0.1);
    const survived = troops.map(troop => troop.survived || 0.1);
    const kills = troops.map(troop => troop.kills || 0.1);

    let dw = [];
    let total = [];
    let coef = [];
    let mot = [];
    let resultArray = [];

    for (let i = 0; i < troopTypes; i++) {
        dw[i] = dead[i] + wounded[i];
        total[i] = dw[i] + survived[i];
        coef[i] = 1 / (((kills[i] - dw[i]) / Math.sqrt(total[i])) * ((kills[i] - dw[i]) / Math.sqrt(total[i])));

        mot[i] = [];
        for (let j = 0; j < troopTypes + 1; j++) {
            if (i === 0 && j < troopTypes) mot[i][j] = 1;
            else if (i === 0 && j === troopTypes) mot[0][troopTypes] = totalTroops - numGuards;
            else if (i >= 1 && i < troopTypes && j === 0) mot[i][0] = coef[0];
            else mot[i][j] = 0;
        }
    }

    for (let i = 1; i < troopTypes; i++) {
        mot[i][i] = -1 * coef[i];
    }

    // Gaussian elimination to solve the linear equations
    for (let i = 0; i < troopTypes - 1; i++) {
        for (let j = i + 1; j < troopTypes; j++) {
            if (Math.abs(mot[i][i]) < Math.abs(mot[j][i])) {
                for (let k = 0; k < troopTypes + 1; k++) {
                    mot[i][k] += mot[j][k];
                    mot[j][k] = mot[i][k] - mot[j][k];
                    mot[i][k] -= mot[j][k];
                }
            }
        }
    }

    for (let i = 0; i < troopTypes - 1; i++) {
        for (let j = i + 1; j < troopTypes; j++) {
            const f = mot[j][i] / mot[i][i];
            for (let k = 0; k < troopTypes + 1; k++) {
                mot[j][k] -= f * mot[i][k];
            }
        }
    }

    for (let i = troopTypes - 1; i >= 0; i--) {
        resultArray[i] = mot[i][troopTypes];
        for (let j = i + 1; j < troopTypes; j++) {
            if (i !== j) {
                resultArray[i] -= mot[i][j] * resultArray[j];
            }
        }
        resultArray[i] /= mot[i][i];
    }

    // Prepare the result string
    let result = `<h2>Formation for ${name}</h2>`;
    result += `<p>For ${numGuards} guards and ${totalTroops} troops:</p>`;
    for (let i = 0; i < troopTypes; i++) {
        result += `<p>${types[i]} : ${Math.floor(resultArray[i])}</p>`;
    }

    // Save the result to the database
    const formation = new Formation({ name, totalTroops, numGuards, results: result });
    
    try {
        await formation.save(); // Save the formation
        res.status(201).json({ message: 'Formation saved successfully!', result });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save formation.', details: err });
    }
};

module.exports = { calculateFormation };
