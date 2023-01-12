import React from 'react';

function GameFormSubmit() {


  const SubmitForm = (event) => {
    event.preventDefault();
    // do something with the form data here
    alert('Your Game Rating has been submited')
  }

  return (
    <form action={`/GameTitle/Rating/Review`} method="POST" onSubmit={SubmitForm}>
     <div>
        <label htmlFor='GameTitle' id='GameTitle'>
            Game Title:
        <input type="text" name='GameTitle' id="GameTitle"/>
        </label>
      </div>
      <br/>
      <div>
      <label htmlFor='Rating' id='Rating'>
        Rating:
        <input
          type="number" name='Rating' id="Rating"/>
      </label>
      </div>
      <br />
      <div>
      <label htmlFor='Review' id='Review'>
        Review:
        <textarea type="text" name='Review' id="Review"/>
      </label>
      </div>
      <br />
      {/* <button type='submit' onClick={SubmitForm}>Submit</button> */}

      <input type='submit' value='Submit'></input>
    </form>
  );
}

export {GameFormSubmit};