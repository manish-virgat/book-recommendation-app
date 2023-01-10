import "./styles.css";
import React, { useState } from "react";

const bookList = {
  Philosophy: [
    {
      bookName: "Beyond Good and Evil by Friedrich Nietzsche",
      Rating: "⭐ 4.9/5"
    },
    {
      bookName: "Republic by Plato",
      Rating: "⭐ 4.5/5"
    },
    {
      bookName: "Ethics by Benedict de Spinoza",
      Rating: "⭐ 4/5"
    }
  ],
  Psychology: [
    {
      bookName: "Thinking, Fast and Slow by Daniel Kahneman",
      Rating: "⭐ 4.9/5"
    },
    {
      bookName: "The Power of Habit by Charles Duhigg",
      Rating: "⭐ 4.5/5"
    },
    {
      bookName: "The Paradox of Choice by Barry Schwartz",
      Rating: "⭐ 4/5"
    }
  ],
  History: [
    {
      bookName: "History of Modern India by Bipan Chandra",
      Rating: "⭐ 4.9/5"
    },
    {
      bookName: "History of medieval India by Radhey Shyam Chaurasia",
      Rating: "⭐ 4.5/5"
    },
    {
      bookName: "India After Gandhi by Ramachandra Guha",
      Rating: "⭐ 4/5"
    }
  ]
};

export default function App() {
  const [selectedBook, setState] = useState("Philosophy");
  function bookselected(books) {
    setState(books);
  }

  return (
    <div className="App">
      <h1>🕮 📚 Books Books and Books 📘 📖</h1>
      <p>Check out some of my favourite books in these genres</p>
      <br />
      <hr />
      <br />
      <div id="book">
        {Object.keys(bookList).map((books) => {
          return <span onClick={() => bookselected(books)}>{books}</span>;
        })}
      </div>

      <div>
        <br />

        <ul>
          {bookList[selectedBook].map((item) => (
            <li key={item.bookName}>
              {" "}
              <div id="bookName">{item.bookName}</div>
              <div id="rate">{item.Rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
