import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {FiHash, FiBookmark} from 'react-icons/fi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiUser} from 'react-icons/bi'
import {CgMoreO} from 'react-icons/cg'
import {FaTwitter} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {GiFeather} from 'react-icons/gi'



const Mobile = () => {
    return(
        <div>
            ffffffsss
        </div>
    )
}

const Desktop = () => {
    return (
        <div className="flex flex-col justify-center items-center w-max" >
            <div className="self-center xl:self-start px-2" >
                <NavLink icon={<FaTwitter/>} />
            </div>
            <nav>
                <ul>
                    <NavLink text="Home" icon={<AiOutlineHome />} />
                    <div className="hidden xl:block" >
                        <NavLink text="Explore" icon={<FiHash />} />
                    </div>
                    <div className="block xl:hidden" >
                         <NavLink icon={<BsSearch/>} />
                    </div>
                    <NavLink text="Notifications" icon={<IoIosNotificationsOutline />} />
                    <NavLink text="Messages" icon={<AiOutlineMail />} />
                    <NavLink text="Bookmarks" icon={<FiBookmark />} />
                    <NavLink text="Profile" icon={<BiUser />} />
                    <NavLink text="More" icon={<CgMoreO />} />
                </ul>
            </nav>
            <div className={`hover:bg-blue-500 flex items-center justify-center w-max rounded-full bg-blue-500 mb-3 px-0 xl:px-14 text-white`} >
                <Link to= "compose/text" className="flex items-center p-4 xl:p-2 text-2xl" >
                    <GiFeather className="block xl:hidden" />
                        <span className={`hidden xl:block overflow-hidden text-center text-lg `} >Tweet</span>       
                </Link>
            </div>
        </div>
    )
}

const NavLink =({text, icon})=>{
    return(
        <li className={`hover:bg-blue-500 flex items-center justify-center w-max rounded-full mt-1 mb-3 px-0 xl:px-${text && 2}`} >
            <Link to={`/${text}` } className="flex items-center p-2 text-2xl" >
                {icon}
                <div className="hidden xl:block overflow-hidden " >
                    <span className={`pl-${text && 3} text-lg`} >{text}</span>       
                </div>
            </Link>
              
        </li>
    )
}

const NavBar = {Mobile, Desktop}

export default NavBar;