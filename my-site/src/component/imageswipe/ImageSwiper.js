import { useState } from 'react';
import { useEffect } from 'react';
import './ImageSwipe.css'

export let SWIPE_INTERVAL = 5000

const ImageSwiper = (props) => {
    const [imageIndex, setImageIndex] = useState(0)
    const imageArray = [
        "./img/deepimpact01.jpg",
        "./img/deepimpact02.jpg",
        "./img/deepimpact03.jpg"
      ]
    useEffect(() => {
        console.log(`triggered by useEffect current Index = ${imageIndex}`)
        startImageSwipe()
    })
    
    const startImageSwipe = () => {
        setTimeout(() => {
            let nextIndex = (imageIndex + 1) % imageArray.length
            console.log(`timeout: nextImageIndex = ${nextIndex}`)
            setImageIndex(nextIndex)
        }, SWIPE_INTERVAL)
    }

    return (
        <div className="swip-container">
            {imageIndex === 0 && <img className="image-container" src={imageArray[imageIndex]} alt="" />}
            {imageIndex === 1 && <img className="image-container" src={imageArray[imageIndex]} alt="" />}
            {imageIndex === 2 && <img className="image-container" src={imageArray[imageIndex]} alt="" />}
        </div>
    )
}

export default ImageSwiper;