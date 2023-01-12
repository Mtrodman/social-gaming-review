import React from 'react';

function GameFormUpdate() {
 

  const UpdateForm = (event) => {
    event.preventDefault();
    // do something with the form data here
    alert('Your Game Rating has been updated')
  }

  const DeleteForm = (event) => {
    event.preventDefault();
    // do something with the form data here
    alert('Your Game Rating has been deleted')
  }

  return (
    <form action={`/GameTitle/Rating/Review`} method="PUT" onUpdateForm={UpdateForm}>
      <div>
        <label htmlFor='GameTitle' id='GameTitle'>
          Game Title:
        <input type="text" name='GameTitle' id="GameTitle"/>
        </label>
      </div>
      <br />
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
      <button type='submit' onClick={UpdateForm}>Update</button>
      <button type='submit' onClick={DeleteForm}>Delete</button>

      {/* <input type="submit" value="Update"></input>
      <input type="submit" value="Delete"></input> */}
      
     
     
    </form>
  );
}

export {GameFormUpdate};