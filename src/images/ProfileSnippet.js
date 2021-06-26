import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Components/Avatar'

export default function ProfileSnippet({id}) {
    const [isFollowing, setIsFollowing] = useState(false)
    const [isFollowingYou, setIsFollowingYou] = useState(true)
    const handleFollowClick = () => setIsFollowing(!isFollowing)
    return (
        <div className="bg-white p-3 rounded-md shadow-lg drop-shadow-lg w-72" >

            {/* Header */}
            <div className="flex justify-between items-center" >
                <Avatar.Default />
                <button onClick={handleFollowClick} className="group font-bold" >
                    {isFollowing ?
                        <div className="relative text-center" >
                            <p className="group-hover:opacity-0 text-white ring-2 ring-blue-600 rounded-full bg-blue-600 p-1 px-3">Following</p>
                            <p className="absolute top-0 opacity-0 group-hover:opacity-100 text-white ring-2 ring-red-500 rounded-full bg-red-500 p-1 px-3 ">Unfollow</p>
                        </div>
                        :
                        <p className="hover:bg-blue-100 rounded-full ring-2 ring-blue-600 p-1 px-3 text-blue-600" >
                            Follow
                        </p>
                    }
                </button>
            </div>

            {/* Name and username */}
            <div className="my-2" >
                <Link className="font-bold" >
                    Code With Mercy 
                </Link>
                <div className="flex flex-row leading-none text-sm text-gray-600">
                    <p>@uhuheruhrehh</p>
                    {isFollowingYou && <p className="bg-gray-200 rounded ml-2" style={{padding:2}} >Follows you</p> }
                </div>
            </div>

            {/* About */}
            <div className="text-sm" >
                Web Developer | WordPress | MongoDB Leaf fluttering in wind | Node JS | I Red heart CSS | HTML & JavaScript Enthusiast — Wizkid FC | Chelsea FC | Messi | Tech
            </div>

            {/* Follwing count */}
            <div className="flex my-2">
                <Link to="/" className="flex justify-center">
                    <b  >2000</b>
                    <p className="ml-1">Following</p>
                </Link>
                <Link to="/" className="flex justify-center ml-3">
                    <b>1900</b>
                    <p className="ml-1">Followers</p>
                </Link>
            </div>
        </div>
    )
}


