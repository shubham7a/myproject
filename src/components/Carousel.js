import { ChevronLeft, ChevronRight } from '@carbon/icons-react'
import React, {useEffect, useState} from 'react'

export default function Carousel() {
    const carouselData = [
        {imgurl: 'https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/8ab8499849ead9b5.jpg?q=50'},
        {imgurl: 'https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9a98ec819d2dfacb.jpg?q=50'},
        {imgurl: 'https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9c06db25774a1ea8.png?q=50'},
    ]
    const [next, setNext] = useState(0)
    const [src, setSrc] = useState(carouselData[0].imgurl)
    useEffect(() => {
        const interval = setInterval(() => {
            setNext(((next + 1)%carouselData.length))
        }, 3000);
        return () => clearInterval(interval);
    })

    useEffect(() => {
        setSrc(carouselData[next].imgurl)
    }, [next])

    return (
        <div className='relative z-0'>
            <img src={src} alt="carousel" />
            <button onClick={() => setNext(Math.abs(next - 1)%carouselData.length)} className='absolute top-1/2 left-0 bg-white py-5'>
                <ChevronLeft />
            </button>
            <button onClick={() => setNext((next + 1)%carouselData.length)} className='absolute top-1/2 right-0 bg-white py-5'>
                <ChevronRight />
            </button>
        </div>
    )
}
