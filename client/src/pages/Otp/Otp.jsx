import React,{useState} from 'react'
import OtpInput from 'otp-input-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Otp.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import {auth} from './firebase.config'
import {toast,Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Otp = () => {
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [ph, setPh] = useState("");
  const verify = useState(true)

  const navigate = useNavigate();

  function onCaptchaVerify(){
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',{
        size:"invisible",
        callback: (response) => {
          onSignup();
        },
        "expired-callback":()=>{}
      },
      auth
      );
    }
  }

  function onSignup(){
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth,formatPh,appVerifier).then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setShowOTP(true)
      toast.success("OTP sended successfully!");
    })
    .catch((error)=>{
      console.log(error)
    })
    
  }

  function onOTPVerify(){
    window.confirmationResult.confirm(otp)
    .then(async(res)=>{
      console.log(res)
      setUser(res.user)
    })
    .catch((err)=>{
      console.log(err);
    })
    navigate('/')
    localStorage.setItem('verify',JSON.stringify(showOTP))
  }

  return (
    <section>
      <div className='container-1'>
      <Toaster toastOptions={{ duration: 4000 }} />
        <div id='recaptcha-container'></div>
        {user ? (
          <h2>Login Success</h2>
        ):(
          <div className='container-2'>
            <h1>Welcome to Chatbot Verification</h1>
            {showOTP ? (
              <>
                <label htmlFor="otp">
                  Enter Your Otp
                </label>
                <OtpInput  
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autofocus>
                </OtpInput>
                <button onClick={onOTPVerify} className='sendbtn'>Verify</button>
              </>
            ):(
              <>
                <div className="phone">
                <label htmlFor="" >
                  Verify Your Phone Number
                </label></div>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button className='sendbtn' onClick={onSignup} verify={verify}>send code via sms</button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Otp
