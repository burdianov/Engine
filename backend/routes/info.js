const router = require('express').Router();
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');

router.get('/me', auth, async (req, res) => {
  const profile = await Profile.findOne({ user: req.user.id });

  res.json(profile);
});

module.exports = router;
