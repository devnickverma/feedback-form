// import { useEffect, useState } from "react";

// export default function FeedbackList() {
//   const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/feedback")
//       .then(res => res.json())
//       .then(data => setFeedbacks(data));
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl mb-2">All Feedbacks</h2>
//       {feedbacks.map((fb, i) => (
//         <div key={i} className="border p-2 mb-2">
//           <p><strong>Name:</strong> {fb.name}</p>
//           <p><strong>Email:</strong> {fb.email}</p>
//           <p><strong>Message:</strong> {fb.message}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await fetch("http://localhost:5000/feedback");
      const data = await response.json();
      setFeedbacks(data);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Feedbacks</h2>
      <div style={styles.feedbackList}>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <div key={index} style={styles.feedbackItem}>
              <h3 style={styles.feedbackTitle}>{feedback.name}</h3>
              <p style={styles.feedbackMessage}>{feedback.message}</p>
              <p style={styles.feedbackEmail}>{feedback.email}</p>
            </div>
          ))
        ) : (
          <p style={styles.noFeedback}>No feedback yet!</p>
        )}
      </div>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    width: "100%",
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
  },
  header: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
  },
  feedbackList: {
    display: "flex",
    flexDirection: "column",
  },
  feedbackItem: {
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  feedbackTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  feedbackMessage: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  feedbackEmail: {
    fontSize: "14px",
    color: "#888",
  },
  noFeedback: {
    textAlign: "center",
    fontSize: "18px",
    color: "#aaa",
  },
};

export default FeedbackList;
