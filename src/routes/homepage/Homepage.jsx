import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

const Homepage = () => {

  const [typingStatus, setTypingStatus] = useState("Human")

  return (
    <div className='homepage'>
      <img src='/orbital.png' className='orbital' />
      <div className="left">
        <h1>React AI</h1>
        <h2>Your Personal Assistent</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima asperiores sunt fugiat laboriosam, quis omnis, nam debitis in eius, nulla vero qui suscipit perspiciatis.</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgcontainer">
          <div className="bgcontainer">
            <div className="bg"></div>
          </div>
          <img src='/bot.png' className='bot' />
          <div className="chat">
            <img src={typingStatus === "bot" 
              ? "/bot.png" 
              : "/human1.jpeg"} 
              />
            <TypeAnimation sequence={[
              "Hello! I'm React!",
              1000, () =>{
                setTypingStatus("Human")
              },
              "Can you show me the code?",
              1000, () => {
                setTypingStatus("bot")
              },
              "Certainly! Here is your code...",
              1000, () => {
                setTypingStatus("Human")
              },
              "Thank You React!",
              1000, () => {
                setTypingStatus("bot")
              },
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src='/logo.png' />
        <div className="links">
          <Link to='/'>Terms of Service</Link>
          <span>|</span>
          <Link to='/'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage