import React from 'react'
import { FaCog, FaRegUser } from 'react-icons/fa';
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo-container">
                <FaRegUser className='logo-icon' />
                <span>User</span>
            </div>
            <div className="icons">
                <IoIosSearch className='search-icon' />
                <div className="notification">
                    <IoIosNotifications className='notification-icon' />
                    <span>1</span>
                </div>
                <div className="user">
                    <FaRegUser className='user-icon' />
                    <span>User</span>
                </div>
                <div className="settings">
                    <FaCog className='settings-icon' />
                </div>
            </div>
        </div>
    )
}

export default Navbar