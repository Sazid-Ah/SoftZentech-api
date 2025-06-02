const FormData = require('../models/FormData');

// Create form entry
exports.createForm = async (req, res, next) => {
  try {
    const form = new FormData(req.body);
    const saved = await form.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    next(error);
  }
};

// Get all entries
exports.getForms = async (req, res, next) => {
  try {
    const forms = await FormData.find();
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    next(error);
  }
};
