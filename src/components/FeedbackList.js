import { useEffect, useState } from "react";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/feedback")
      .then(res => res.json())
      .then(data => setFeedbacks(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">All Feedbacks</h2>
      {feedbacks.map((fb, i) => (
        <div key={i} className="border p-2 mb-2">
          <p><strong>Name:</strong> {fb.name}</p>
          <p><strong>Email:</strong> {fb.email}</p>
          <p><strong>Message:</strong> {fb.message}</p>
        </div>
      ))}
    </div>
  );
}
