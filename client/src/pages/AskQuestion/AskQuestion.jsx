import React, { useState } from 'react'
import './AskQuestion.css'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {askQuestion} from '../../actions/question'
import { updateProfile } from '../../actions/users'

const AskQuestion = () => {

  const [questionTitle,setQuestionTitle] = useState('')
  const [questionBody,setQuestionBody] = useState('')
  const [questionTags,setQuestionTags] = useState('')
  const [noOfQuestions,setNoOfQuestions] =useState('')

  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  // console.log(User,"15")
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    setNoOfQuestions(noOfQuestions + 1);
    // console.log({questionBody,questionTags,questionTitle})
    dispatch(askQuestion({questionTitle,questionBody,questionTags, userPosted:User.result.name, userId:User?.result?._id},navigate))
    dispatch(updateProfile(User.result?._id,{noOfQuestions}))
    console.log(User)
  }

  const handleEnter = (e) => {
    if(e.key === 'Enter'){
      setQuestionBody(questionBody + '\n')
    }
  }
  return (
    <div className='ask-question'>
      <div className="ask-ques-container">
        <h1>Ask a public question</h1>
        <form onSubmit={handleSubmit} >
            <div className="ask-form-container">
                <label htmlFor="ask-ques-title">
                    <h4>Title</h4>
                    <p>Be specific and imagine you'r asking a question to another person</p>
                    <input type="text" onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector?' id='ask-ques-title' />
                </label>
                <label htmlFor="ask-ques-body">
                    <h4>Body</h4>
                    <p>Include all information someone would need to answer your question</p>
                    <textarea name="" onChange={(e) => {setQuestionBody(e.target.value)}} onKeyPress={handleEnter} id="ask-ques-body" cols="30" rows="10"></textarea>
                    
                </label>
                <label htmlFor="ask-ques-tags">
                    <h4>Tags</h4>
                    <p>Add up to 5 tags t describe what your question is about</p>
                    <input type="text" onChange={(e) => {setQuestionTags(e.target.value.split(' '))}} placeholder='e.g. (xml typescript wordpress' id='ask-ques-tags' />
                </label>
            </div>
            <input type="submit" value='Review your question' className='review-btn'/>
        </form>
      </div>
    </div>
  )
}

export default AskQuestion 
