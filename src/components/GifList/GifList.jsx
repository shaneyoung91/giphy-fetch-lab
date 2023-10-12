import React from 'react';

export default function GifList({data}) {
    if (!data) {
        return null;
    }
    
    return (
        <>
            <h3>GIF List</h3>
            {/* Only show first 8 results from the API in a grid display
            Each GIF should be rendered as a GifListItem component */}
            {data.map((gif, index) => (
                <div key={index}>
                    <img src={gif.images.original.url} alt={gif.title} />
                </div>
            ))}
        </>
    )
}
