import React from 'react'
import Picker from 'emoji-picker-react';
import { useState } from 'react';
import './About.css'

const Aboutpage = ({aboutuser}) => {
   const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  
    return ( 
      <div>
      <div className='about-container'>
   {aboutuser.map((data)=>{
     return(
       <div  className='about' key={data.id}>
        <h3>Author, name and email</h3>
        <h5>Author's Name: <span>{data.name}</span> </h5>
        <p>Author's Email: <span>{data.email}</span> </p>
        <p>Author's number: <span>000{data.id} </span></p>

        <p className="remark">
          I am one of the contributor to the comments needed to 
          promote rajiss-ctrl to the next level in kodecamp, Thanks.
        </p>

         <div>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
       </div>
      
     )
   })}

      
      </div>
      </div> 
    )}

export default Aboutpage