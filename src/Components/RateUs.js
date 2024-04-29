import React, { useState } from 'react';

const RateUs = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h2>Rate Us</h2>
      <p>Please rate your experience:</p>
      <div style={{ fontSize: '2rem' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: 'pointer',
              color: star <= rating ? '#ffc107' : '#e4e5e9',
              marginRight: '5px',
            }}
            onClick={() => handleStarClick(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p>Your rating: {rating}/5</p>
    </div>
  );
};

export default RateUs;
