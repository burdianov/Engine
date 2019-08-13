const express = require('express');
const router = express.Router();

const Dictionary = require('../../models/Dictionary');

// @route   GET api/dictionary
// @desc    Get all dictionary entries
// @access  Public
router.get('/dictionary', async (req, res) => {
  try {
    const entries = await Dictionary.find();
    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
