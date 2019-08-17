const mongoose = require("mongoose");

const StepSchema = new mongoose.Schema(
  {
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "lesson"
    },
    sn: {
      type: Number,
      required: 1
    },
    text: {
      type: String,
      required: 1
    },
    media: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = Step = mongoose.model("step", StepSchema);
