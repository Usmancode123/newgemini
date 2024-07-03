import React from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'
const Main = () => {
  return (
    <div className='main'> 
    {/* nav  */}
 <div className="nav">
    <p>Gemini</p>
    <img src={assets.user_icon}alt="" />
 </div>


<div className="main-container">
    <div className="greet">
        <p><span>Hello, Dev.</span></p>
        <p>How Can I Help You Today?</p>
    </div>

    {/* cards  */}
    <div className="cards">
<div className="card">
    <p>Suggest beautiful places to see on an upcoming road trip</p>
    <img src={assets.compass_icon} alt="" />
</div>
<div className="card">
    <p>Briefly summarize this concept: urban planning</p>
    <img src={assets.bulb_icon} alt="" />
</div>
<div className="card">
    <p>Brainstrom team bonding activities for our work retreat</p>
    <img src={assets.message_icon} alt="ff" />
</div>
<div className="card">
    <p>Improve the readibility of the following code</p>
    <img src={assets.code_icon} alt="" />
</div>
    </div>

{/* input  */}
<div className="main-bottom">
    <div className="search-box">
        <input type="text" placeholder='Enter prompt here' />
        <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
        </div>
    </div>
    <p className="bottom-info">
        Gemini may display inaccurate info,
         including about people,so
         double-ckeck in response. 
         Your privacy and Gemini Apps
    </p>
</div>

</div>
    </div>
  )
}

export default Main
