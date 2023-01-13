import React, { useState } from 'react';

function GameFormSubmit() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your review has been submited.")
    // send form data to server or perform other logic
    console.log(title, rating, review);
    setTitle("");
    setRating("");
    setReview("");
  }

  return (
    <form action="GameFormUpdate" method="POST" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          id="titel"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          id="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </label>
      <br />
      <label>
        Review:
        <textarea
          name="review"
          id="review"
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export {GameFormSubmit};