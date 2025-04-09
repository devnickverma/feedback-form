import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  return (
    <div className="App flex">
      <div className="w-1/4 bg-gray-100 p-4">
        <button
          onClick={() => setShowFeedbacks(!showFeedbacks)}
          className="bg-green-500 text-white px-4 py-2 w-full"
        >
          {showFeedbacks ? "Back to Form" : "Show Feedbacks"}
        </button>
      </div>
      <div className="w-3/4 p-4">
        {showFeedbacks ? <FeedbackList /> : <FeedbackForm />}
      </div>
    </div>
  );
}

export default App;
