const Review = require('../models/review');
const Dorm = require('../models/dorm');

exports.addReview = async (req, res) => {
    const { dormId, userId, content, rating } = req.body;
    const review = new Review({ dorm: dormId, user: userId, content, rating });
    await review.save();

    const dorm = await Dorm.findById(dormId);
    dorm.reviews.push(review._id);
    await dorm.save();

    res.json(review);
};
