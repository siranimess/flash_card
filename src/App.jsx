import { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard.jsx";

function App() {
  const cards = [
    {
      question: "What does useState() do in React?",
      answer: "It stores and updates state inside a React component.",
      difficulty: "Easy",
    },
    {
      question: "What is JSX?",
      answer: "JSX is syntax that lets us write HTML-like code inside JavaScript.",
      difficulty: "Easy",
    },
    {
      question: "What is a React component?",
      answer: "A reusable piece of user interface.",
      difficulty: "Easy",
    },
    {
      question: "What are props in React?",
      answer: "Props are data passed from a parent component to a child component.",
      difficulty: "Easy",
    },
    {
      question: "What does the onClick event do?",
      answer: "It runs a function when the user clicks an element.",
      difficulty: "Easy",
    },
    {
      question: "What does the map() method do?",
      answer: "It creates a new array by transforming each item in an existing array.",
      difficulty: "Medium",
    },
    {
      question: "What is conditional rendering?",
      answer: "Displaying different UI depending on a condition.",
      difficulty: "Medium",
    },
    {
      question: "Why does React use keys when rendering lists?",
      answer: "Keys help React identify which items changed, were added, or removed.",
      difficulty: "Medium",
    },
    {
      question: "What is Vite?",
      answer: "A fast development and build tool commonly used with React.",
      difficulty: "Easy",
    },
    {
      question: "What does setState do?",
      answer: "It changes state and causes the component to render again.",
      difficulty: "Medium",
    },
    {
      question: "What does useEffect() do?",
      answer: "It runs side effects such as fetching data or updating the document.",
      difficulty: "Hard",
    },
    {
      question: "What is the virtual DOM?",
      answer: "A lightweight representation of the real DOM used by React.",
      difficulty: "Hard",
    },
    {
      question: "What is an event handler?",
      answer: "A function that runs after a user event such as a click.",
      difficulty: "Medium",
    },
    {
      question: "What does import do in JavaScript?",
      answer: "It brings code, components, or files from another module.",
      difficulty: "Easy",
    },
    {
      question: "What does export default do?",
      answer: "It makes a value or component available to import in another file.",
      difficulty: "Medium",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const getRandomCard = () => {
    let randomIndex = currentCard;

    while (randomIndex === currentCard) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }

    setCurrentCard(randomIndex);
    setFlipped(false);
  };

  return (
    <div className="app">
      <div className="container">
        <p className="badge">REACT STUDY DECK</p>

        <h1>💻 Knowledge Cards</h1>

        <p className="description">
          Test your knowledge of React, JavaScript, and web development concepts.
          Click each card to reveal the answer.
        </p>

        <p className="card-count">
          Total Cards: <strong>{cards.length}</strong>
        </p>

        <Flashcard
          card={cards[currentCard]}
          flipped={flipped}
          setFlipped={setFlipped}
        />

        <button className="next-button" onClick={getRandomCard}>
          Next Random Card →
        </button>

        <p className="hint">
          Click the flashcard to flip between the question and answer.
        </p>
      </div>
    </div>
  );
}

export default App;