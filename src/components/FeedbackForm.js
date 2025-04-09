import { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    setName("");
    setEmail("");
    setMessage("");
    alert("Feedback submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-2">Submit Feedback</h2>
      
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="block mb-2 border p-2 w-full"
      />

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="block mb-2 border p-2 w-full"
      />

      <textarea
        placeholder="Your feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="block mb-2 border p-2 w-full"
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}

