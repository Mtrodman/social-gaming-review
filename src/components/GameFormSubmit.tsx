import React, { useState, useEffect } from 'react';

const POST = async (formData: {title: string, rating: number, review: string}) => {
  await fetch('/GameFormSubmit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
};

interface FormData {
  title: string;
  rating: number;
  review: string;
}

function GameFormSubmit() {
  const [formData, setFormData] = useState<FormData>({title: '', rating: 0, review: ''});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => (response.json()))
    .then(json => setFormData(json))
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
    const value = e.target.value;
    setFormData(prevState => ({...prevState, [name]: value}));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    POST(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={(e) => handleChange(e, 'title')}
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={(e) => handleChange(e, 'rating')}
        />
      </label>
      <br />
      <label>
        Review:
        <textarea
          name="review"
          id="review"
          value={formData.review}
          onChange={(e) => handleChange(e, 'review')}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export { GameFormSubmit };