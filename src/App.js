import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [showFeedback, setShowFeedback] = useState(false);

  const styles = {
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      margin: "20px auto",
    },
    toggleButton: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#2196F3",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div className="App">
      <div style={styles.buttonContainer}>
        {!showFeedback && (
          <button style={styles.toggleButton} onClick={() => setShowFeedback(true)}>
            Show Feedback
          </button>
        )}

        {showFeedback && (
          <button style={styles.toggleButton} onClick={() => setShowFeedback(false)}>
            Back to Feedback Form
          </button>
        )}
      </div>

      {showFeedback ? <FeedbackList /> : <FeedbackForm />}
    </div>
  );
}

export default App;
