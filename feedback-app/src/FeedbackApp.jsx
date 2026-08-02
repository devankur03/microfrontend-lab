import React from "react";

export default function FeedbackApp() {
  return (
    <div className="container mt-4 d-flex justify-content-center align-items-center flex-column">
      <h2>Feedback</h2>

      <textarea
        rows="6"
        placeholder="Your feedback"
      />

      <br /><br />

      <button>Submit</button>
    </div>
  );
}