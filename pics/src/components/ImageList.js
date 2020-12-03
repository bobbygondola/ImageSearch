import React from 'react'
import ImageCard from './ImageCard'
import '../styles/image.css'

const ImageList = (props) => {
    const images = props.images
    return (
        <div className="image-list">
            {images.map((image) => {
                return <ImageCard key={image.id} image={image}/>
            })}
        </div>
    )
}

export default ImageList
