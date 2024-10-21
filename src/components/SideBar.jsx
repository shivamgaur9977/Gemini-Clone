import {assets} from '../assets/assets.js';
import React, {useContext, useState} from 'react'
import './SideBar.css'
import { Context } from '../Context.jsx';

export default function SideBar() {
    
    let [extented, setextented] = useState(false);
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);


    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt);
    }

    let showSidebar = () => {
        setextented(prev => !prev);
    };

    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={showSidebar} className='menu' src={assets.menu_icon} alt='menu_icon'/>
                <div onClick={newChat} className='new-chat'>
                    <img src={assets.plus_icon} alt='plus_icon'/>
                    {extented && <p>New Chat</p>}
                </div>
                { extented && <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    {prevPrompts.map((item, index) => {
                        return (
                            <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                                <img src={assets.message_icon}/>
                                <p>{item.slice(0, 22)}...</p>
                            </div>
                        )
                    })}
                    
                </div>}
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon}/>
                    {extented && <p>Help</p>}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon}/>
                    {extented && <p>Activity</p>}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon}/>
                    {extented && <p>Settings</p>}
                </div>
            </div>
        </div>
    )
}