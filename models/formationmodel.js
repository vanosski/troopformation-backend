const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    totalTroops: { type: Number, required: true },
    numGuards: { type: Number, required: true },
    results: { type: String, required: true },
});

const Formation = mongoose.model('Formation', formationSchema);

module.exports = Formation;
