import React from 'react'
import './Payment.css'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
// import Razorpay from 'razorpay'


const Payment = () => {

        
    const navigate = useNavigate();
    const handleOpenRazorpay=(data)=>{
        const options={
            key:'rzp_test_21sHxZwlksmBjj',
            amount:data.amount,
            currency:data.currency,
            order_id:data.id,
            handler: function(response){
                console.log(response,"12")
                axios.post('https://stack-overflow-h7rv.onrender.com/order/verify')
                .then(res=>{
                    console.log(res,"16")
                    navigate('/')
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const handlePaymentGold=()=>{
        const _data = { amount : 1000 }
        axios.post('https://stack-overflow-h7rv.onrender.com/order/orders',_data)
        .then(res => {
            console.log(res.data,"29")
            handleOpenRazorpay(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const handlePaymentSilver=()=>{
        const _data = { amount : 100 }
        axios.post('https://stack-overflow-h7rv.onrender.com/order/orders',_data)
        .then(res => {
            console.log(res.data,"29")
            handleOpenRazorpay(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }



  return (
    <div className="space">
        <div className='container'>
            <div className="sample">
                <div className="free">Free</div>
                <h1>Free</h1>
                <h5> 1 question a day</h5>
                <div className="line"></div>
                <div className="description-1">
                    <p>ChatOps integrations - Slack & Microsoft Teams</p>
                    <p>Your own private space hosted on stackoverflowteams.com</p>
                    <p>Structured and searchable knowledge base</p>
                </div>
                <div >
                    <button className="free-btn">Free</button>
                </div>
            </div>
            <div className="sample">
                <div className="silver free">Silver</div>
                <h1>₹100/month </h1>
                <h5> 5 questions a day</h5>
                <div className="line"></div>
                <div className="description-2">
                    <p>Single sign-on (SSO) with SAML + Okta integration</p>
                    <p>ChatOps integrations - Slack & Microsoft Teams</p>
                    <p>Your own private space hosted on stackoverflowteams.com</p>
                    <p>Structured and searchable knowledge base</p>
                </div>
                <div >
                    <button className="silver-btn" onClick={handlePaymentSilver}>Get Started</button>
                </div>
            </div>
            <div className="sample">
                <div className="gold free">Gold</div>
                <h1>₹1000/month</h1>
                <h5> unlimited questions</h5>
                <div className="line"></div>
                <div className="description-3">
                    <p>Long-form knowledge with Articles</p>
                    <p>Additional integrations — ChatOps, Jira, GitHub & Okta</p>
                    <p>Group content together into Collections</p>
                    <p>Usage and adoption metrics</p>
                    <p>Priority customer support</p>
                    <p>Content Health tools</p>
                </div>
                <div>
                    <button  className="gold-btn" onClick={handlePaymentGold}>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
