import { useState } from "react";
import axios from "axios";
import "./App.css"; // import your CSS file

function App() {
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setLoading(true);

    try {
      const res = await axios.post<{ response: string }>(
        "/api/generate-text", // Now using the proxy path
        { prompt },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponses((prevResponses) => [...prevResponses, res?.data?.response]);
      setPrompt("");
    } catch (err) {
      console.log(err);
      setResponses((prevResponses) => [
        ...prevResponses,
        "Error fetching response",
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">AskLitha!</h1>
      {responses.length > 0 && (
        <div className="app-response">
          {responses.map((response, index) => (
            <div key={index} className="response-item">
              {response}
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className={`app-form move-bottom`}>
        <textarea
          className="app-textarea"
          rows={1}
          placeholder="Tanyakan apa saja"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button type="submit" className="app-button" disabled={loading}>
          {loading ? "..." : "→"}
        </button>
      </form>
    </div>
  );
}

export default App;
