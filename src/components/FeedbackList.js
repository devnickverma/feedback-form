import React, { useEffect, useState } from "react";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:5000/feedback");
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div style={styles.listContainer}>
      <h2 style={styles.header}>User Feedback</h2>
      <p style={styles.count}>Total Feedbacks: {feedbacks.length}</p>

      {feedbacks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No feedback yet.</p>
      ) : (
        feedbacks.map((fb, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.name}>{index + 1}. {fb.name}</h3>
            <p style={styles.email}>{fb.email}</p>
            <p style={styles.message}>{fb.message}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  listContainer: {
    width: "100%",
    maxWidth: "700px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#333",
  },
  count: {
    textAlign: "center",
    fontSize: "16px",
    marginBottom: "20px",
    color: "#555",
  },
  card: {
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: "#e3f2fd",
    borderRadius: "8px",
    borderLeft: "5px solid #2196f3",
  },
  name: {
    fontSize: "18px",
    margin: "0 0 5px 0",
    color: "#0d47a1",
  },
  email: {
    fontSize: "14px",
    margin: "0 0 10px 0",
    color: "#555",
  },
  message: {
    fontSize: "15px",
    color: "#333",
  },
};

export default FeedbackList;
