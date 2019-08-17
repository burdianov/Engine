import React, { useState } from "react";
import powerPhrases from "../../assets/i-want-to-meet-you.mp3";
import UploadFile from "../admin/UploadFile";

const Classroom = props => {
  const [data, setData] = useState({
    isPlaying: false
  });

  const { isPlaying } = data;

  const playSound = () => {
    let sound = new Audio();
    sound.src = powerPhrases;

    sound.loop = false;
    sound.onended = () => {
      setData({
        ...data,
        isPlaying: false
      });
    };
    if (!isPlaying) {
      sound.play();
      setData({
        ...data,
        isPlaying: true
      });
    }
  };

  return (
    <div>
      <h1>Lesson</h1>
      <button
        onClick={playSound}
        className={`btn btn-success ${isPlaying && "disabled"}`}
      >
        Play
      </button>
      {/* <UploadFile /> */}
    </div>
  );
};

export default Classroom;
