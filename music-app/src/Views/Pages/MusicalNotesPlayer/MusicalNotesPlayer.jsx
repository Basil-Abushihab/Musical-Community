import React, { useState } from "react";
import * as Tone from "tone";

const MusicalNotesPlayer = () => {
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");
  const [duration, setDuration] = useState("8n");

  const playNotes = (notes) => {
    const synth = new Tone.Synth().toDestination();
    const noteArray = notes.split(",").map((note) => note.trim());

    noteArray.forEach((note, index) => {
      synth.triggerAttackRelease(note, duration, Tone.now() + index * 0.5);
    });
  };

  const validateNotes = (input) => {
    const notePattern = /^([A-Ga-g][#b]?[0-8](, )?)+$/;
    return notePattern.test(input);
  };

  const handleChangeNotes = (e) => {
    setNotes(e.target.value);
    setMessage("");
  };

  const handleChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const handlePlayClick = () => {
    if (validateNotes(notes)) {
      playNotes(notes);
      setMessage(`Playing notes: ${notes}`);
    } else {
      setMessage(
        "Invalid notes. Please enter valid notes separated by commas (e.g., C4, D4, E4)."
      );
    }
  };

  const handleClearClick = () => {
    setNotes("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md ">
        <img
          src="https://i.gifer.com/origin/80/80bd259f327ff9543b19fe8151fb4323_w200.gif"
          alt="Logo"
          className="w-24 h-24 mx-auto mb-4"
        />

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Musical Notes Player
        </h1>

        <input
          type="text"
          value={notes}
          onChange={handleChangeNotes}
          placeholder="Enter notes (e.g., C4, D4, E4)"
          className="p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full mb-4"
        />

        <div className="mb-6">
          <label htmlFor="duration" className="mr-2 text-lg text-gray-700">
            Duration:
          </label>
          <select
            id="duration"
            value={duration}
            onChange={handleChangeDuration}
            className="px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
          >
            <option value="4n">Whole Note</option>
            <option value="2n">Half Note</option>
            <option value="4n">Quarter Note</option>
            <option value="8n">Eighth Note</option>
            <option value="16n">Sixteenth Note</option>
          </select>
        </div>

        <button
          onClick={handlePlayClick}
          className="w-[45%] mr-4 ml-3 px-6 py-3 text-lg text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-lg hover:from-orange-500 hover:to-orange-700 transition duration-300 mb-4"
        >
          Play Notes
        </button>

        <button
          onClick={handleClearClick}
          className="w-[45%]  px-6 py-3 text-lg text-white bg-gradient-to-r from-brown-400 via-brown-500 to-brown-600 rounded-lg hover:from-brown-500 hover:to-brown-700 transition duration-300"
        >
          Clear Notes
        </button>

        <div>
          {message && (
            <p
              className={`text-lg font-semibold text-center ${
                message.startsWith("Invalid")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicalNotesPlayer;
