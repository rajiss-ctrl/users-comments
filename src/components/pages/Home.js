import React from 'react'


import './Homepage.css'

const Home = ({userComm}) => {
  return (
    <div>
         <h1 className='heading'>
        User's comments!
     </h1>
    
    <div className='home-container'> 
       {userComm.map((profile)=>{
      return(
        <div  key={profile.id }  >
             <div className="individual-comm">
          <h2> Name: {profile.name.slice(0,9)}</h2>
          <p>Email: {profile.email}</p>
          <h2>Topic: <span>{profile.body.slice(0,9)}</span></h2>
          <h3>COMMENT</h3>
          <p>{profile.body}</p>
       
        </div>
        </div>
      )
    })} 
    </div>
    </div>
  )
}

export default Home;