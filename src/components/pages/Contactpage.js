import React from 'react'
import './Contactpage.css'

const Contactpage = ({usercontact}) => {
  return (
    <div className="contact-container">
      <h1>Select Authors email:</h1>
      <form>
        <select>
            {usercontact.map((data)=>{
              return(
                <option value="">{data.email}</option>
              )
            })}
      
        </select>
    </form>
    </div>
  )
}

export default Contactpage