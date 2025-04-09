import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Footer from "./components/Footer"; 

function App() {
  const [showFeedback, setShowFeedback] = useState(false);

  const styles = {
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "15px",
      margin: "20px auto",
    },
    toggleButton: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#3f51b5",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      minWidth: "160px",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div className="App" style={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: "20px" }}>
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
      <Footer />
    </div>
    
  );
}

export default App;

