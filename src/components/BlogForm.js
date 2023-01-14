import React, { useState, useEffect } from 'react';

// GET Route
// -----------------------
const GET = async () => {
  await fetch('/BlogForm', {
    method: 'GET',
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

// PUT Route
// -----------------------
const PUT = async () => {
    await fetch('/BlogForm', {
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

// DELETE Route
// ------------------------
const DELETE = async () => {
  await fetch('/BlogForm', {
    method: 'DELETE',
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


const BlogForm = () => {

  const [formData, setFormData] = useState([setFormData]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  return (
    <form action="BlogForm" onSubmit={GET}>
      {formData.map((form, index) => (
        <div key={index}>
          <label>
            Game Title:
            <input
              type="text"
              name="title"
              id="title"
              value={form.title}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <br />
          <label>
            Rating:
            <input
              type="text"
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
          <div className='revButts'>
              <button type="submit" onSubmit={PUT} >Update</button>
          </div>
          <div className='revButts'>
              <button type="submit" onSubmit={DELETE}>Delete</button>
          </div>
          <br />
        </div>
      ))}
    </form>
  );
 }


export {BlogForm};