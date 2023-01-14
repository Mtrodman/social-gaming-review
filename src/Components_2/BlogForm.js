import React, { useState } from 'react';

const BlogForm = () => {
  const [formData, setFormData] = useState([
    { title: '', rating: '', review: '' },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  return (
    <form action="BlogForm" method="GET">
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
          <br />
        </div>
      ))}
    </form>
  );
};

export {BlogForm};