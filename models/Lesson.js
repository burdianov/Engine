const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema(
  {
    sn: {
      type: Number,
      required: 1
    },
    title: {
      type: String,
      required: 1
    },
    image: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = Lesson = mongoose.model("lesson", LessonSchema);
