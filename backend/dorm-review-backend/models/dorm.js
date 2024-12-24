const mongoose = require('mongoose');

const dormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

module.exports = mongoose.model('Dorm', dormSchema);
