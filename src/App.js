import React, { useState, useEffect } from "react";
import quotesData from "./data/quotes.json";
import { Link } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const App = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const colors = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFD700", "#FFA07A"];

  const getRandomQuote = () => {
    const randomInex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomInex];
  };

  const getRandomColor = () => {
    const randomInex = Math.floor(Math.random() * colors.length);
    return colors[randomInex];
  };

  useEffect(() => {
    const initailQuote = getRandomQuote();
    setCurrentQuote(initailQuote);
  }, []);

  useEffect(() => {
    const randomColor = getRandomColor();
    setBgColor(randomColor);
  }, []);

  function handleRandomQuote() {
    const newQuote = getRandomQuote();
    setCurrentQuote(newQuote);
  }
  const handleChangeColor = () => {
    const newColor = getRandomColor();
    setBgColor(newColor);
  };

  return (
    <div style={{ backgroundColor: bgColor }} className="app">
      {currentQuote && (
        <div id="quote-box">
          <div className="quote-text">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              style={{ color: bgColor }}
              className="quote-icon"
            />
            <div id="text" style={{ color: bgColor }}>
              {currentQuote.quote}
            </div>
          </div>
          <div id="author" style={{ color: bgColor }}>
            - {currentQuote.author}
          </div>
          <div className="icons">
            <Link
              id="tweet-quote"
              to="twitter.com/intent/tweet"
              target="_blank"
              className="icon"
              style={{ backgroundColor: bgColor }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              to="https://www.tumblr.com/"
              target="_blank"
              className="icon"
              style={{ backgroundColor: bgColor }}
            >
              <FontAwesomeIcon icon={faTumblr} />
            </Link>
            <div className="quote-btn">
              <button
                id="new-quote"
                style={{ backgroundColor: bgColor }}
                onClick={() => {
                  handleRandomQuote();
                  handleChangeColor();
                }}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="me">by bola-nabil</div>
    </div>
  );
};

export default App;
