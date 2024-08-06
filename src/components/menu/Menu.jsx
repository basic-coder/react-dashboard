import React from 'react'
import './menu.css';
import { IoIosHome, IoMdGift } from 'react-icons/io';
import './menu.css'
import { Link } from 'react-router-dom';
import { FaRegUser,FaUsers } from 'react-icons/fa';


const Menu = ({setOpen}) => {

    const menu = [
        {
            id: 1,
            title: "Main",
            listItems: [
                {
                    id: 1,
                    title: "Home",
                    url: '/',
                    icon: <IoIosHome className='home-icon' />
                },
                {
                    id: 2,
                    title: "Profile",
                    url: '/',
                    icon: <FaRegUser className='profile-icon' />
                }
            ]
        },
        {
            id: 2,
            title: "Lists",
            listItems: [
                {
                    id: 1,
                    title: "Users",
                    url: '/users',
                    icon: <FaUsers />
                },
                {
                    id: 2,
                    title: "Products",
                    url: '/products',
                    icon: <IoMdGift />
                }
            ]
        }
    ];
    
    return (
        <div className={`menu`}>

            {
                menu.map((item, index) => (
                    <div className="item" key={index}>
                        <span className='title'>{item.title}</span>
                        {
                            item.listItems.map((listItem, i) => (
                                <Link className='listitem' key={i} onClick={() => setOpen(false)} to={listItem.url}>
                                    {listItem.icon} 
                                    <span className='listitem-title'>{listItem.title}</span>
                                </Link>
                            ))
                        }

                    </div>
                ))
            }

        </div>
    )
}

export default Menu