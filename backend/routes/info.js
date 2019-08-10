const router = require('express').Router();
const auth = require('../utils/verifyToken');

router.get('/me', auth, async (req, res) => {
  const user = await User.findOne({ _id: req.user });

  if (user) {
    return res.status(200).send(user);
  }

  return res.send('Nothing promissing...');
});

module.exports = router;
