import React, { useState, useEffect } from 'react';

const POST = async () => {
  await fetch('/GameFormSubmit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      rating: rating,
      review: review,
    })
  });
  setTitle(formData.title);
  setRating(formData.rating);
  setReview(formData.review);
}
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => (response.json))
  .then(json => useState(json))
}, []);

function GameFormSubmit() {
  const [formData, setFormData] = useState([setFormData]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  return (
    <form action="GameFormUpdate">
      <label>
        Title:
        <input
          type="text"
          name="title"
          id="titel"
          value={form.title}
          onChange={(e) => handleChange(e, index)}
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          id="rating"
          value={form.rating}
          onChange={(e) => handleChange(e, index)}
        />
      </label>
      <br />
      <label>
        Review:
        <textarea
          name="review"
          id="review"
          value={form.review}
          onChange={(e) => handleChange(e, index)}
        />
      </label>
      <br />
      <button type="submit" method="POST" onSubmit={POST}>Submit</button>
    </form>
  );
}

export {GameFormSubmit};