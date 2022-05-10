import React from 'react'
import './Contactpage.css'

const Contact = ({userComm}) => {
  return (
    <div className="contact-container">
      <h1>Select Authors email:</h1>
      <form>
        <select>
            {userComm.map((data)=>{
              return(
                <option value="">{data.email}</option>
              )
            })}
      
        </select>
    </form>
    </div>
  )
}

export default Contact;