import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from '@mui/material';
import  ChatIcon from "@mui/icons-material/Chat";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SidebarChat from './SidebarChat';
function sidebar() {
  return (
    <div className='sidebar'>
        
        <div className='sidebar_header'>
          <Avatar src="https://i.guim.co.uk/img/media/9bbaa85c91fe55de14f83e11ee33e7352388bfdd/430_195_2987_1793/master/2987.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=f9fc787e98bae78e398c432ffb789394"
          />
          <div className='sidebar_headright'>
            <IconButton>
               <DonutLargeIcon />
            </IconButton>
            <IconButton>
               <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
           </div>
        </div>
        <div className='sidebar_search'>
          <div className='sidebar_searchcontainer'>
            <SearchOutlined />
            <input placeholder='=search or start a new chat' type="text"/   >
          </div>

        </div>
        <div className='sidebar_chats'>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </div>
    </div>
  )
}

export default sidebar