import React from 'react';
import './GifList.css'

export default function GifList({data}) {
    if (!data) {
        return null;
    }
    
    return (
        <>
            {/* Only show first 8 results from the API in a grid display
            Each GIF should be rendered as a GifListItem component */}
            <div className="GifContainer">
                {data.map((gif, index) => (
                    <div key={index} className="image-container">
                        <img src={gif.images.original.url} alt={gif.title} />
                        <div>
                            <p>{gif.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
