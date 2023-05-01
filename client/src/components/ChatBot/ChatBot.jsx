import React,{useState} from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './ChatBot.css'

import { useNavigate } from 'react-router-dom'
import bot from '../../assets/bot.png'

import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import config from '../ChatBot/config'

const ChatBot = ({verify}) => {

  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((current) => !current);
  };

  const navigate = useNavigate();
  const verified = localStorage.getItem('verify')
  const handleBtn = () => {
    console.log(verified)
    if(verified===true){
      console.log(verified)
    }
    handleToggle();
    if(verified===null){
      navigate('/otp')
    }
    
  }
  return (
    <div className="chat">
      {verified && visible? (
        <div className='chatbot'>
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
        </div>
      ):
      <></>
      }
      
      <div className="chat-btn">
          <button onClick={handleBtn} className='botbtn'> <img src={bot} alt="bot"/></button>
      </div>
    </div>
  )
}

export default ChatBot









