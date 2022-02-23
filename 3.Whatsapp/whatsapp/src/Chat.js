import SearchOutlined from '@mui/icons-material/SearchOutlined'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import "./Chat.css"
import AttachFile from '@mui/icons-material/AttachFile'
import MoreVert from '@mui/icons-material/MoreVert'
import MicIcon from '@mui/icons-material/Mic'
import InsertEmoticon from "@mui/icons-material/InsertEmoticon";


function Chat() {
  return (
    <div className='chat'> 
      <div className='chat_header'>
        <Avatar/>
        <div className='chatheader_info'>
          <h2>room name</h2>
          <p>last seen</p>
        </div>
        <div className='chatheader_right'>
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        <p className='chat_message'>
        <span className='chat_name'>Arvindh</span>
          
          This is a message
          <span className='chat_time'>
            {new Date().toUTCString()}
          </span>          
          </p>

          <p className='chat_message chat_receiver'>
        <span className='chat_name'>Arvindh</span>
          
          This is a message
          <span className='chat_time'>
            {new Date().toUTCString()}
          </span>                
          </p>
      </div>
      <div className='chat_footer'>
        <InsertEmoticon/>
        <form >
          <input placeholder='type a message'
          type="text"/>
          <button type='submit'>Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}

export default Chat