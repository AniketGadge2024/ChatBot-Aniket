import React, { useState } from 'react'
import './index.css'
import Emoji from '../ChatbotEmoji'
import ChatbotLogic from '../ChatBotLogic'

const ChatBotStructure = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleChatBot = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div>
        <div className='Chat-bot-div' style={{ display: isVisible ? 'block' : 'none' }}><ChatbotLogic></ChatbotLogic></div>
      
      <div onClick={toggleChatBot}><Emoji></Emoji></div>
    </div>
  )
}

export default ChatBotStructure
