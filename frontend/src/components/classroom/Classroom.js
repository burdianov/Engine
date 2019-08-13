import React, { useState } from 'react';
import powerPhrases from '../../assets/power-phrases.mp3';

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
        className={`btn btn-success ${isPlaying && 'disabled'}`}
      >
        Play
      </button>
    </div>
  );
};

export default Classroom;
