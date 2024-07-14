import React, { useState } from 'react'
import NormalFace from '../Images/normal.gif'
import Pravicy from'../Images/pravicy.gif'
import Seen from '../Images/seen.gif'
import teeth from '../Images/teeth.gif'
import congo from '../Images/congo.gif'
import './index.css'

const Emoji = () => {
const [inputValue, setInputValue]= useState('');
const [imageSrc, setImageSrc]= useState(NormalFace);

    const PasswordPravicy =(event)=>{
      const value = event.target.value;
       setInputValue(value);
       if(value!==''){
        setImageSrc(Pravicy)
       }else{
        setImageSrc(NormalFace)
       }

    }
   


    const UsernameReaction =(event)=>{
      const value = event.target.value;
      if(value!==''){
        setImageSrc(teeth)
      }
    }

    const Summithandler = ()=>{
      setImageSrc(congo)
    }
   

   
  return (
    <div>
      <label  htmlFor="username">username</label>
      <input onChange={UsernameReaction}  type="text" />

      <label htmlFor="password">password</label>
      <input onChange={PasswordPravicy}  type="password"/>

      <div className='chat-box-cont'><img className='chat-smile' src={imageSrc} alt="" /></div>


      <button onClick={Summithandler} className='btn btn-primary'>Summit</button>
     
    </div>
  )
}

export default Emoji
