import React, { useCallback, useEffect, useRef, useState } from 'react';
import Avatar from './Avatar';
import ClickAwayListener from "react-click-away-listener";
import {Link} from 'react-router-dom';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {FiHash, FiBookmark} from 'react-icons/fi';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {BiUser, BiDotsHorizontal} from 'react-icons/bi';
import {CgMoreO} from 'react-icons/cg';
import {FaTwitter} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import {GiFeather} from 'react-icons/gi';
import {usePopper} from "react-popper";



const Mobile = () => {
    return(
        <div>
            
        </div>
    )
}

const Desktop = () => {
    const clickRef = useRef(null)

    const handleNavClick = useCallback((e)=>{
            clickRef.current.style.color = "black"         // change the color of the previously clicked nav link

            e.currentTarget.style.color = "rgba(59, 130, 246)"           // change the color of the clicked nav link

            clickRef.current = e.currentTarget            // have the ref point to the currently clicked nav link
            

    }, [])

    console.log("  Nav is updating")
    useEffect(() => {
        clickRef.current.style.color = "rgba(59, 130, 246)"    // Since on mounting clickeRef points to the first nav link. this makes it red
      
    }, [])
    console.log("Nav is updating")

    

    return (
        <div className=" bg-red-300 flex flex-col justify-start items-center xl:items-start w-max h-screen max-h-screen overflow-y-auto" >
            <TwitterIcon />
            <nav>
                <ul>
                    <NavLink ref={clickRef} text="Home" icon={<AiOutlineHome />} onClick={handleNavClick} />

                    <div className="hidden xl:block" >
                        <NavLink text="Explore" icon={<FiHash />} onClick={handleNavClick} />
                    </div>
                    <div className="block xl:hidden" >
                         <NavLink icon={<BsSearch/>} onClick={handleNavClick} />
                    </div>

                    <NavLink text="Notifications" icon={<IoIosNotificationsOutline />} onClick={handleNavClick}/>
                    <NavLink text="Messages" icon={<AiOutlineMail />}onClick={handleNavClick} />
                    <NavLink text="Bookmarks" icon={<FiBookmark />} onClick={handleNavClick} />
                    <NavLink text="Profile" icon={<BiUser />} onClick={handleNavClick} />
                    <MoreNavLink />
                </ul>
            </nav>
            <TweetButton />
            <User />
        </div>
    )
}

const TwitterIcon = () => {
    return(
        <div className="self-center xl:self-start px-2" >
                <NavLink icon={<FaTwitter/>} />
        </div>
    )
}

const NavLink = React.forwardRef(({text, icon, onClick}, ref)=>{
    return(
        <li onClick={onClick} ref={ref} className={`hover:bg-blue-200 flex items-center justify-center w-max rounded-full mt-1 mb-3 px-0 xl:px-${text && 2}`} >
            <Link to={`/${text}` } className="flex items-center p-2 text-2xl" >
                {icon}
                <div className="hidden xl:flex overflow-hidden xl:flex-col" >
                    <span className={`pl-${text && 3} text-lg`} >{text}</span>       
                </div>
            </Link>
              
        </li>
    )
}) 


const User = () => {
    const [referenceElement, setReferenceElement] = useState(null)
    const [popperElement, setPopperElement] = useState(null)
    const [arrowElement, setArrowElement] = useState(null)
    const [showPopper, setShowPopper] = useState(false)

    const {styles, attributes} = usePopper(referenceElement, popperElement, {
        placement: "top-start",
        modifiers: [{
            name:"arrow",
            options: {element: arrowElement},

        }]
    })

    const handleClick = useCallback(() => {
        setShowPopper(!showPopper);
    }, [showPopper])
    return(
        <>
        <div onClick={handleClick} ref={setReferenceElement} className=" mt-auto mb-4 w-full flex items-center px-3 justify-between rounded-full cursor-pointer ">
            <Avatar.Default />
            <div className="xl:flex items-center hidden ">
                <div className="mx-2">
                    <b>Izzy</b>
                    <p className="text-gray-500" >
                        @sonOFomesham
                    </p>
                </div>
                <BiDotsHorizontal className="ml-2" />
            </div>
        </div>
       { showPopper && 
            <div ref={setPopperElement}  style={styles.popper} {...attributes.popper}>
                    <UserPopper handleClickAway = {handleClick} />
                    <div ref={setArrowElement} style={styles.arrow} />
            </div>
        }
        </>
    )
}
const UserPopper = ({handleClickAway}) => {
    return (
        <ClickAwayListener onClickAway={handleClickAway} >
        <div className="bg-white ml-3 w-full text-gray-700 mb-2 shadow-lg py-2 drop-shadow-lg rounded-lg z-40">
            <Link to="/account/add">
                <p className="p-2 pr-10">Add an existing account</p>
            </Link>
            <div style={{height:1}} className="w-full bg-gray-600" />
            <Link to="/logout">
                <p className="p-2 pr-10">Add an existing account</p>
            </Link>
        </div>
        </ClickAwayListener>
    )
}
const TweetButton = () => {
    return(
        <div className={`hover:bg-blue-500 flex items-center justify-center w-max rounded-full bg-blue-500 mb-3 px-0 xl:px-16  text-white`} >
            <Link to= "compose/text" className="flex items-center p-4 xl:p-2 text-2xl" >
                <GiFeather className="block xl:hidden" />
                    <span className={`hidden xl:block overflow-hidden text-center text-lg font-bold `} >Tweet</span>       
            </Link>
        </div>
    )
}

const MoreNavLink = () => {
    const [referenceElement, setReferenceElement] = useState(null)
    const [popperElement, setPopperElement] = useState(null)
    const [showPopper, setshowPopper] = useState(false)
    const {styles, attributes} = usePopper(referenceElement, popperElement, {
        placement: "top-start",
        modifiers: [{name: 'arrow'}]
    })

    const handleClick = useCallback(() => {
        setshowPopper(!showPopper);
    }, [showPopper])


    return (
        <>
        <NavLink ref={setReferenceElement} text="More" icon={<CgMoreO />} onClick={handleClick} />
        { 
            showPopper &&
            <ClickAwayListener onClickAway={handleClick} >
                <div ref={setPopperElement} style={styles.popper} {...attributes.popper} 
                    className="z-40"
                >
                    <ul className="bg-gray-100 rounded -mb-9 shadow-lg py-2  drop-shadow-lg" >
                        <List setshowPopper={setshowPopper} text="Topics" />
                        <List setshowPopper={setshowPopper} text="Moments" />
                        <List setshowPopper={setshowPopper} text="Newsletters" />
                        <List setshowPopper={setshowPopper} text="Twitter Ads" />
                        <List setshowPopper={setshowPopper} text="Analytics" />
                        <div className="bg-blue-400 h-1 my-1 w-full" />
                        <List setshowPopper={setshowPopper} text="Settings and privacy" />
                        <List setshowPopper={setshowPopper} text="Help Center" />
                        <List setshowPopper={setshowPopper} text="Display" />
                        <List setshowPopper={setshowPopper} text="Keyboard shortcuts" />
                    </ul>
                </div>
            </ClickAwayListener>
        }
            
        
        </>
    )
}
const List = ({text, setshowPopper}) => {
    const handleClick = () => {
        setshowPopper(false)
    }
    return( 
        <li onClick={handleClick} className = "py-2 px-3 hover:bg-blue-300" >
            <Link  to={`/${text}`} className="flex items-center" >
            <FiBookmark />
                <p className="px-2 text-lg" >{text}</p>
            </Link>
        </li>
    )
}
const NavBar = {Mobile, Desktop}

export default NavBar;