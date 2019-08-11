const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Profile = require('../models/Profile');

const { check, validationResult } = require('express-validator');

// @route   POST api/user/profile
// @desc    Create or update user profile
// @access  Private
router.post(
  '/profile',
  [
    auth,
    [
      check('role', 'Role is required')
        .not()
        .isEmpty(),
      check('country', 'Country is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { role, country } = req.body;

    const profileFields = {};

    profileFields.user = req.user.id;
    if (role) profileFields.role = role;
    if (country) profileFields.country = country;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        profile = await Profile.findOneAndUpdate(
          {
            user: req.user.id
          },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
