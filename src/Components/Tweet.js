import React, { useEffect, useMemo, useState } from 'react'
import Avatar from './Avatar'
import {BiBlock, BiDotsHorizontal} from 'react-icons/bi';
import faker from 'faker'
import { usePopper } from 'react-popper';
import ClickAwayListener from 'react-click-away-listener';
import { AiOutlineFrown, AiOutlineRetweet } from 'react-icons/ai';
import { FiUserPlus } from 'react-icons/fi';
import { CgPlayListAdd } from 'react-icons/cg';
import { BsFlag, BsVolumeMute } from 'react-icons/bs';
import { ImEmbed } from 'react-icons/im';
import { FaRegComment, FaShare } from 'react-icons/fa';
import {FcLike} from 'react-icons/fc'
import "./CSS/Tweet.css"


export  default function Tweet({tweet}) {
    // const tweet = useMemo(() => faker.lorem.paragraph(), []) 
    console.log("tweet is updating")
    useEffect(() => {
    })
    return (
        <div className="bg-white my-2 w-full">
            <div className="flex px-3" >
                <Avatar.Hover />
                <div className=" flex-1 ml-2">
                    <div className="flex justify-between">
                        <div className="flex" >
                            <b>Uwem Israel</b>
                            <p className="px-2" >@iwilsonnonny. <span>8h</span> </p>
                        </div>
                        <MoreButton />
                    </div>
                    <div className="mb-2" >
                        <p>
                            {tweet}
                        </p>
                    </div>

                    <div className="flex justify-between text-gray-400 ">
                        <div>
                            <CommentButton />
                        </div>
                        <div>
                            <RetweetButton />
                        </div>
                        <div>
                            <LikeButton />
                        </div>
                        <div>
                            <ShareButton />
                        </div>
                    </div>

                </div>
            </div>
            <div className="divide"/>
        </div>
    )
}

const LikeButton = () => {
    return(
        <div className="flex items-center" >
            <div className="mr-1 hover:bg-red-200 rounded-full p-1" >
                <FcLike />
            </div>
            <div className="text-red-600" >
                <Count actionCount={0} />
            </div>
        </div>
    )
}
const RetweetButton = () => {
    return(
        <div className="flex items-center" >
            <div className="mr-1 hover:bg-red-200 rounded-full p-1" >
                <AiOutlineRetweet />
            </div>
            <div className="text-green-600" >
                <Count actionCount={0} />
            </div>
        </div>
    )
}
const CommentButton = () => {
    return(
        <div className="flex items-center" >
            <div className="mr-1 hover:bg-red-200 rounded-full p-1" >
                <FaRegComment />
            </div>
            <Count actionCount={0} />
        </div>
    )
}
const ShareButton = () => {
    return (
        <FaShare />
    )
}
const MoreButton = () => {
    const [referenceElement, setreferenceElement] = useState(null)
    const [popperElement, setPopperElement] = useState(null)
    const [showMenu, setShowMenu] = useState(false)
    const {styles, attributes} = usePopper(referenceElement, popperElement, {
        placement:"bottom-end"
    })

    const handleClick = React.useCallback(() => setShowMenu(!showMenu), [showMenu]) 
        const userName = "kjkjkljlkj"
        const following = false
        console.log("more is updating")
        
    return (
        <div>
            <div ref={setreferenceElement} onClick={handleClick}  className="rounded-full hover:bg-blue-300 p-1">
                <BiDotsHorizontal  />
                {   showMenu &&
                    <ClickAwayListener onClickAway={handleClick} >
                        <div ref={setPopperElement} style={styles.popper}  {...attributes.popper}
                             className="text-gray-800 bg-white py-3 rounded-md text-base shadow-lg drop-shadow-lg -mt-5 z-50" >
                            <ul>
                                <li className="list" >
                                    <AiOutlineFrown className="icon" />
                                    <p>Not intrested in this Tweet</p>
                                </li>
                                <li className="list" >
                                    <FiUserPlus className="icon" />
                                    <p>{following? "Unfollow": "Follow"} @{userName}</p>
                                </li>
                                <li className="list">
                                    <CgPlayListAdd className="icon" />
                                    <p>Add/remove @{userName} from Lists</p>
                                </li>
                                <li className="list">
                                    <BsVolumeMute className="icon" />
                                    <p>Mute @{userName}</p>
                                </li>
                                <li className="list">
                                    <BiBlock className="icon" />
                                    <p>Block @{userName}</p>
                                </li>
                                <li className="list">
                                    <ImEmbed className="icon" />
                                    <p>Embed Tweet</p>
                                </li>
                                <li className="list" >
                                    <BsFlag className="icon" />
                                    <p>Report Tweet</p>
                                </li>
                            </ul>
                        </div>
                    </ClickAwayListener>
                }
            </div>
        </div>
    )
}



const Count = ({actionCount=1}) => {
    const [increaseCount, setIncreaseCount] = useState(true)
    useEffect(()=>{
       const y = setInterval(() => {
            
            setIncreaseCount(!increaseCount)
        }, 2000);

        return () => clearInterval(y)
    }, [increaseCount])
    return (
        <div className="relative h-5 flex items-center  w-4 overflow-hidden" >
            <p className={`absolute z-10 text-center w-full transition-all duration-500 -mt-${increaseCount?"10":"0"}`}>
                {actionCount === 0? "" : actionCount}
            </p>
            <p className={`absolute z-10 text-center w-full transition-all duration-500 mt-${increaseCount?"0":"10"}`}>
                {++actionCount}
            </p>
        </div>
    )
}
