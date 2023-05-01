import React from 'react'
import './ChatBot.css'
const LearningOptions = (props) => {

  const options = [
    { text: "Javascript", handler: props.actionProvider.handleJavascriptList, id: 1 },
    { text: "React", handler: props.actionProvider.handleReact, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
  ];
  
  return (
    <div className='learning-options-container'>
      {
        options.map((option) => (
          <button className='learning-option-button' key={option.id} onClick={option.handler}>
            {option.text}
          </button>
        ))
      }
    </div>
  )
}

export default LearningOptions
