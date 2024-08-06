import React from 'react'
import { FaBars, FaCog, FaRegUser } from 'react-icons/fa';
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import './navbar.css'
import { IoClose } from 'react-icons/io5';

const Navbar = ({setOpen,open}) => {

    return (
        <div className='navbar'>
            <div className="logo-container">
                <FaRegUser className='logo-icon' />
                <span>User</span>
            </div>
            
            <div className="navbars">
                {
                   !open ? <FaBars onClick={() => setOpen(true)} /> :  <IoClose  onClick={() => setOpen(false)} />
                }
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