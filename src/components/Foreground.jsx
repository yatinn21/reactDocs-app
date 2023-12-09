import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis?",
            fileSize: ".2mb",
            close: true,
            tag: {
                isOpen: true, tagTitle: "Upload", tagColor: 'blue'
            }
        },
        {
            desc: "Download latest Animal movie",
            fileSize: "3GB",
            close: false,
            tag: {
                isOpen: true, tagTitle: "Download now", tagColor: 'green'
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".4mb",
            close: false,
            tag: {
                isOpen: true, tagTitle: "Download Now", tagColor: 'green'
            }
        },
    ]
    return (
        <>
            {/* <div className='fixed top-0 left-0 z-[3] w-full h-screen'> */}
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap'>
                {data.map((item, index) => (
                    <Card data={item} reference={ref} />
                ))}
                {/* <Card /> */}
            </div>
        </>
    )
}

export default Foreground
