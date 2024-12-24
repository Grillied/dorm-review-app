const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    dorm: { type: mongoose.Schema.Types.ObjectId, ref: 'Dorm', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', reviewSchema);
