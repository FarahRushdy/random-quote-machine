import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      console.log("API response:", data); // check in console
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };
  
  
  

  useEffect(() => {
    fetchQuote(); // fetch once when app loads
  }, []);


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div id="quote-box" className="bg-white rounded-2xl shadow-md text-center">
        <p id="text" className="text-xl italic mb-4">"{quote}"</p>
        <h3 id="author" className="text-lg font-semibold">— {author}</h3>
        <button id="new-quote"
          onClick={fetchQuote}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          New Quote
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text="${quote}"%20--%20${author}`}
          id="tweet-quote"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Tweet Quote
        </a>
          
      </div>
    </div>
  );
}

export default App;
