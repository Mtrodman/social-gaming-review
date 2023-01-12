import React from 'react';


function BlogForm() {
  
  const UserName = [];
  const GameForm = ['GameTitle', 'Ratings', 'Reviews']

  UserName.forEach(({Id}) => {
    GameForm.push('GameTitle', 'Rating', 'Review')
  })

  return (
    <form action={`/GameTitle/Rating/Review`} method="GET" onSubmit={SubmitForm}>
     <label htmlFor='GameTitle' id='GameTitle'>
        Game Title:
        <input type="text" name='GameTitle' id="GameTitle"/>
      </label>
      <br />
      <label htmlFor='Rating' id='Rating'>
        Ratings:
        <input
          type="number" name='Rating' id="Rating"/>
      </label>
      <br />
      <label htmlFor='Review' id='Review'>
        Review:
        <textarea type="text" name='Review' id="Review"/>
      </label>
      <br />
    </form>
  );
}
  
export {BlogForm};