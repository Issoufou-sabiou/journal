import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

function CreateNote({ textHandler, saveHandler, inputText }) {
  // Limitation du nombre de caractères
  const charLimit = 200;
  const charLeft = charLimit - inputText.length;

  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength="200"
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={(charLeft / charLimit) * 200} // Calcul de la valeur de la barre de progression
      />
    </div>
  );
}

export default CreateNote;