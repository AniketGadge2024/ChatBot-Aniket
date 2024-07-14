import React from 'react'
import './index.css'
import Emoji from '../ChatbotEmoji'
import ChatbotLogic from '../ChatBotLogic'

const ChatBotStructure = () => {

    


  return (
    <div>
        <div className='Chat-bot-div'><ChatbotLogic></ChatbotLogic></div>
      
      <div><Emoji></Emoji></div>
    </div>
  )
}

export default ChatBotStructure
