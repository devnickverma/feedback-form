import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = { name, email, message };

    try {
      const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });
      const result = await response.json();
      if (result.success) {
        alert("Feedback submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Feedback Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit Feedback</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
    padding: "30px 20px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    fontSize: "26px",
    marginBottom: "25px",
    color: "#333",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontSize: "15px",
    fontWeight: "500",
  },
  input: {
    padding: "12px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "12px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "vertical",
    minHeight: "100px",
  },
  submitButton: {
    marginTop: "20px",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default FeedbackForm;
