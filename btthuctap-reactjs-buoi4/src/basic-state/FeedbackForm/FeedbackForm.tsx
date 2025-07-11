import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm: React.FC = () => {
  const [feedbackText, setFeedbackText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedbackText(e.target.value);
  };

  return (
    <div className="feedback-form">
      <h3>Feedback Form</h3>
      <textarea
        value={feedbackText}
        onChange={handleChange}
        placeholder="Enter your feedback here..."
      />
      <div className="feedback-preview">
        <strong>Your Feedback:</strong>
        <p>{feedbackText}</p>
      </div>
    </div>
  );
};

export default FeedbackForm;
