import { useState } from "react";
import { generateText } from "./utils/api";
import "./App.css"; // import your CSS file

function App() {
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setLoading(true);

    try {
      const res = await generateText(prompt);
      setResponses(res?.response);
      setPrompt("");
    } catch (err) {
      console.log(err);
      setResponses("Error fetching response");
    } finally {
      setLoading(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">AskLitha!</h1>
      {responses && <div className="app-response">{responses}</div>}

      <form onSubmit={handleSubmit} className={`app-form move-bottom`}>
        <textarea
          className="app-textarea"
          rows={1}
          placeholder="Tanyakan apa saja"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button type="submit" className="app-button" disabled={loading}>
          {loading ? "..." : "→"}
        </button>
      </form>
    </div>
  );
}

export default App;
