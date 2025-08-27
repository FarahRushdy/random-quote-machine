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

  // This is the "render" equivalent:
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-md text-center">
        <p className="text-xl italic mb-4">"{quote}"</p>
        <h3 className="text-lg font-semibold">— {author}</h3>
        <button
          onClick={fetchQuote}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
