const express = require('express');
const router = express.Router();

const Dictionary = require('../../models/Dictionary');

const { check, validationResult } = require('express-validator');

// @route   POST api/admin/dictionary
// @desc    Create dictionary entry
// @access  Private (admin)
router.post(
  '/dictionary',
  [
    [
      check('eng', 'English word is required')
        .not()
        .isEmpty()
    ],
    [
      check('rus', 'Russian word is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { eng, rus } = req.body;

    const dictionaryEntry = {};

    if (eng) dictionaryEntry.eng = eng;
    if (rus) dictionaryEntry.rus = rus;

    try {
      let entry = await Dictionary.findOne({ eng });

      if (entry) {
        entry = await Dictionary.findOneAndUpdate({
          rus
        });

        return res.json(entry);
      }

      entry = new Dictionary(dictionaryEntry);
      await entry.save();
      res.json(entry);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
