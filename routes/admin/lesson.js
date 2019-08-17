const express = require("express");
const router = express.Router();
const multer = require("multer");

const { check, validationResult } = require("express-validator");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // cb(null, "./uploads/images");
    cb(null, "./uploads/media");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
  if (file.mimetype === "audio/mpeg") {
    // store the file
    cb(null, true);
  } else {
    // reject a file (null means don't send error)
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter
});

const Lesson = require("../../models/Lesson");

// @route   POST api/admin/lesson
// @desc    Add or update lesson
// @access  Private (admin)
router.post(
  "/lesson",
  [
    upload.single("media"),
    [
      check("title", "Title is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title } = req.body;
    const media = req.file.path;

    const lesson = {};

    if (title) lesson.title = title;
    if (media) lesson.media = media;

    try {
      let entry = await Lesson.findOne({ title }).select("title media");

      if (entry) {
        const filter = { title };
        const update = { media };
        entry = await Lesson.findOneAndUpdate(filter, update);
        console.log(entry);
        return res.json(entry);
      }

      entry = new Lesson(lesson);
      await entry.save();
      res.json(entry);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
