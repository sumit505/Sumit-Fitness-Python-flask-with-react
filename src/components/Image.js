import React from 'react'

export const Image = ({ url }) => {
    return (
        <div className="gallery-img">
            <img src={url} alt="" />
        </div>
    )
}
