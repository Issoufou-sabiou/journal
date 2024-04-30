import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateNote from "./createNote";
import { v4 as uuid } from "uuid";
import "../css/Note.css";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [showNotes, setShowNotes] = useState(false); // État pour gérer la visibilité des notes

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    if (inputText.trim() !== "") {
      setNotes((prevState) => [
        ...prevState,
        {
          id: uuid(),
          text: inputText,
        },
      ]);
      setInputText("");
    }
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  // Enregistrement des données dans le stockage local
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  // Récupération des données depuis le stockage local
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  // Ajouter une nouvelle note toutes les 24 heures
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const lastNotificationTime = new Date(localStorage.getItem("lastNotificationTime"));

      // Comparer la dernière notification avec l'heure actuelle
      if (!lastNotificationTime || currentTime - lastNotificationTime >= 24 * 60 * 60 * 1000) {
        // Envoyer la notification
        alert("Rappel : N'oubliez pas de prendre des notes régulièrement !");

        // Mettre à jour la dernière heure de notification
        localStorage.setItem("lastNotificationTime", currentTime.toString());
      }
    }, 24 * 60 * 60 * 1000); // Ajoute une note toutes les 24 heures

    return () => clearInterval(intervalId); // Nettoyer l'intervalle à la fin du composant
  }, []);

  return (
    <div className="notes">
      <button onClick={() => setShowNotes(!showNotes)}>Voir Notes</button> {/* Bouton pour afficher/masquer les notes */}
      {showNotes && (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Note id={note.id} text={note.text} deleteNote={deleteNote} />
            </li>
          ))}
        </ul>
      )}
      <CreateNote textHandler={textHandler} saveHandler={saveHandler} inputText={inputText} />
    </div>
  );
}

export default Notes;
