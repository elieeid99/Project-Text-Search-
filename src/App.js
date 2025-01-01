import React, { useState } from "react";
import "./App.css";

function App() {
  const articles = [
    { id: 1, text: "Learn React and build interactive UIs." },
    { id: 2, text: "Vue.js is great for beginners and advanced developers." },
    { id: 3, text: "Angular provides powerful tools for large applications." },
    { id: 4, text: "React is a popular library for front-end development." },
  ];

  const [query, setQuery] = useState("");

  // Function to handle user input
  const handleSearch = (e) => setQuery(e.target.value.toLowerCase());

  // Highlight matching text
  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  // Filter articles based on the search query
  const filteredArticles = articles.filter((article) =>
    article.text.toLowerCase().includes(query)
  );

  return (
    <div className="app">
      <h1>Search Articles</h1>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={handleSearch}
        className="search-box"
      />
      <ul className="results">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <li
              key={article.id}
              dangerouslySetInnerHTML={{
                __html: getHighlightedText(article.text, query),
              }}
              className="result-item"
            ></li>
          ))
        ) : (
          <li className="no-results">No results found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
