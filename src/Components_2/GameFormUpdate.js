import React, { useState } from 'react';

function GameFormUpdate() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleUpdate = (event) => {
    setTitle(event.target.value);
    setRating(event.target.value);
    setReview(event.target.value);
    event.preventDefault();
    alert("Your review has been updated.")
    // send form data to server or perform other logic
    console.log(title, rating, review);
  }

  const handleDelete = () => {
    setTitle('');
    setRating('');
    setReview('');
  }

  return (
    <form action="GameFormUpdate" method="PUT">
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
      <button type="button" onClick={handleUpdate}>Update</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </form>
  );
}

export {GameFormUpdate};
