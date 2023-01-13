import React, { useState } from 'react';

function GameFormUpdate() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleUpdate = (event) => {
    event.preventDefault();
    alert("Your review has been updated.")
    // send form data to server or perform other logic
    console.log(title, rating, review);
  }

  return (
    <form action="GameFormUpdate" method="PUT" onSubmit={handleUpdate}>
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
      <button type="submit">Update</button>
    </form>
  );
}

export {GameFormUpdate};
