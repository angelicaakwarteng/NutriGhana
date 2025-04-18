import React, { useState, useEffect, useRef } from 'react';
import picture from './images/chatbox-icon.svg';
import './Chatbox.css'; 

function Chatbox() {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isEnded, setIsEnded] = useState(false);
  
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Toggle chatbox visibility
  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  // Handle sending messages
  const handleSendMessage = () => {
    if (inputText.trim() === '' || isEnded) return;
    
    // Check if user wants to end the chat
    if (["bye", "quit", "exit"].includes(inputText.toLowerCase())) {
      setMessages([
        ...messages, 
        { name: "User", message: inputText },
        { name: "Lica", message: "Chatbot session ended. Goodbye!" }
      ]);
      setInputText('');
      setIsEnded(true);
      return;
    }

    // Add user message to chat
    const updatedMessages = [...messages, { name: "User", message: inputText }];
    setMessages(updatedMessages);
    
    // Send message to backend
    fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: JSON.stringify({ message: inputText }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(data => {
        // Handle response...
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
    setInputText('');
  };

  // Handle key press (Enter to send)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="container">
      <div className="chatbox">
        <div className={`chatbox__support ${isOpen ? 'chatbox--active' : ''}`}>
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img 
                src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" 
                alt="avatar" 
              />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat support</h4>
              <p className="chatbox__description--header">
                Hi. My name is Lica. Your nutritional assistant
              </p>
            </div>
          </div>
          
          <div className="chatbox__messages" ref={messagesContainerRef}>
            {messages.map((item, index) => (
              <div 
                key={index} 
                className={`messages__item ${
                  item.name === "Lica" 
                    ? "messages__item--visitor" 
                    : "messages__item--operator"
                }`}
              >
                {item.message}
              </div>
            ))}
          </div>
          
          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Write a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              ref={inputRef}
              disabled={isEnded}
            />
            <button 
              className="chatbox__send--footer send__button"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
        
        <div className="chatbox__button">
          <button onClick={toggleChatbox}>
            <img src={picture} alt="Chatbox Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;