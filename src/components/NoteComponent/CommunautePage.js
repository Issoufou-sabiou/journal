import React, { useState } from 'react';
import '../css/CommunautePage.css'; // Assurez-vous d'importer vos fichiers CSS nécessaires ici
import { NavLink } from 'react-router-dom';

function CommunautePage() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const messageText = inputText.trim();
    if (messageText !== '') {
      const newMessage = {
        text: messageText,
        author: 'x',
        likes: 0,
        liked: false,
      };
      setMessages([newMessage, ...messages]);
      setInputText('');
    } else {
      alert('Veuillez saisir un message valide.');
    }
  };

  const handleLikeClick = (index) => {
    const updatedMessages = [...messages];
    const message = updatedMessages[index];
    if (!message.liked) {
      message.likes += 1;
      message.liked = true;
    } else {
      message.likes -= 1;
      message.liked = false;
    }
    updatedMessages[index] = message;
    setMessages(updatedMessages);
  };

  return (
    <div className="CommunautePage">
      <header>
        <h1>Notre Espace Communautaire</h1>
        <button>
          <NavLink to="/">Journal</NavLink>
        </button>
      </header>
      <main>
        <section className="post-form">
          <h2>Partagez vos pensées</h2>
          <form onSubmit={handleMessageSubmit}>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Écrivez votre message ici"
            ></textarea>
            <button type="submit">Publier</button>
          </form>
        </section>
        <section className="post-list">
          <h2>Messages partagés</h2>
          <div id="messageContainer">
            {messages.map((message, index) => (
              <div key={index} className="messages-by-x">
                <p>{message.text}</p>
                <span>Posté par {message.author}</span>
                <span className="like-count">{message.likes}</span>
                <button
                  className={`like-button ${message.liked ? 'liked' : ''}`}
                  onClick={() => handleLikeClick(index)}
                >
                  {message.liked ? 'Dislike' : 'Like'}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>© 2024 Notre Espace Communautaire</p>
      </footer>
    </div>
  );
}

export default CommunautePage;
