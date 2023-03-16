
import React, { useState, useEffect } from 'react';

// GET Route
// -----------------------
const GET = async (title: string, rating: number, review: string) => {
  await fetch('/GameFormUpdate', {
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
  setTitle(FormData.title);
  setRating(FormData.rating);
  review(FormData.review);
}
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => (response.json()))
  .then(json => new FormData(json))
}, []);

// PUT Route
// -----------------------
const PUT = async (title: string, rating: number, review: string) => {
  await fetch('/GameFormUpdate', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      rating: rating,
      review: review,
    })
  });
  setTitle(FormData.title);
  rating(FormData.rating);
  review(FormData.review);
}
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => (response.json()))
  .then(json => setFormData(json))
}, []);

// DELETE Route
// ------------------------
const DELETE = async (title: string, rating: number, review: string) => {
  await fetch('/GameFormUpdate', {
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
  .then(response => (response.json()))
  .then(json => setFormData(json))
}, []);

const GameFormUpdate = () => {

  const [formData, setFormData] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  return (
    <form action="BlogForm" method="GET" onSubmit={GET}>
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
              <button type="submit" method="PUT" onSubmit={PUT} >Update</button>
              <button type="submit" method ="DELETE" onSubmit={DELETE}>Delete</button>
          </div>
          <br />
        </div>
      ))}
    </form>
  );
 }

export {GameFormUpdate};


  function setTitle(title: any) {
    throw new Error('Function not implemented.');
  }

