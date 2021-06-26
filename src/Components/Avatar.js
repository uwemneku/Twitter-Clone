import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import image from '../images/image.jpg'
import ProfileSnippet from '../images/ProfileSnippet'

 function Default() {
    const [imageIsLoading, setImageIsLoading] = useState(true)
    const handleLoad = () => setImageIsLoading(false)
    return (
        <div className="w-14 h-14 rounded-full overflow-hidden" >
            { imageIsLoading && <div className=" animate-pulse w-full h-full bg-black" />}
            <img onLoad={handleLoad}  className="w-full"  alt="ddd" src={image} />
        </div>
    )
}

function Hover(){
    const [referenceElement, setReferenceElement] = useState(null)
    const [popperElement, setPopperElement] = useState(null)
    const [showProfileSnippet, setShowProfileSnippet] = useState(false)

    
    const {styles, attributes} = usePopper(referenceElement, popperElement, {
        placement: "bottom-start",
        
    })

    const handleShowSnippet = () => setShowProfileSnippet(!showProfileSnippet)
    return (
        <div onMouseEnter={handleShowSnippet} onMouseLeave={handleShowSnippet} >
            <div ref={setReferenceElement} >
                <Default />
            </div>
            {
                showProfileSnippet &&
            
                <div className="mt-1 z-50 " ref={setPopperElement} style={styles.popper} {...attributes.popper} >
                    <ProfileSnippet />
                </div>
            }
        </div>
    )
}

const Avatar = {Default, Hover}

export default Avatar;

