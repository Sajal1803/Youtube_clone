import React, { useState} from "react";
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import Avatar from '@mui/icons-material/AccountCircleSharp';
import {Link} from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header_left">
                <MenuSharpIcon />
                <Link to="/">
                <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="Youtube_Logo" />
                </Link>
            </div>

            <div className="header_input">
                <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='Search'/>
                <Link to={`/search/${inputSearch}`}>
                <SearchSharpIcon className='header_inputButton'/> </Link>
            </div>

            <div className="header_icons">
            <VideoCallSharpIcon className='header_icon'/>
            <AppsSharpIcon className='header_icon'/>
            <NotificationsSharpIcon className='header_icon'/>
            <Avatar alt="Sajal Jain" src="https://avatars.githubusercontent.com/u/76404926?s=40&v=4" />
            </div>
        </div>
    );
}

export default Header;
