import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
const Sidebar = () => {

    const [extended,setExtended]=useState(false)
  return (
    <div className='sidebar'>
        {/* top  */}
      <div className="top">
        <img onClick={()=>setExtended(perv=> !perv)} className='menu' src={assets.menu_icon} alt="" />

        <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
           {extended? <p>New Chat</p>:null}
        </div>
        <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
               {extended? <p>What is react ....</p>:null}
            </div>
        </div>
      </div>

      {/* bottom  */}

      <div className="bottom">
        <div className="bottom-item recent-entry" >
            <img src={assets.question_icon} alt="" />
          {extended?  <p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry" >
            <img src={assets.history_icon} alt="" />
                   {extended?  <p>History</p>:null}
        </div>
        <div className="bottom-item recent-entry" >
            <img src={assets.setting_icon} alt="" />
                {extended?  <p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
