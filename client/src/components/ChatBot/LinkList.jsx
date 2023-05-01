import React from 'react'
import './ChatBot.css'

const LinkList = (props) => {
  return (
    <div className='link-list'>
      {
        props.options.map((lin) => (
            <li key={lin.id} className='link-list-item'>
                <a href={lin.url} target='_blank'  rel="noopener noreferrer" className="link-list-item-url">{lin.text}</a>
            </li>
        ))
      }
    </div>
  )
}

export default LinkList
