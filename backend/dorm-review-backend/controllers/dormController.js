const Dorm = require('../models/dorm');

exports.getDorms = async (req, res) => {
    const dorms = await Dorm.find().populate('reviews');
    res.json(dorms);
};

exports.createDorm = async (req, res) => {
    const { name, description } = req.body;
    const dorm = new Dorm({ name, description });
    await dorm.save();
    res.json(dorm);
};
