import React from 'react';

export const GiftGridItem = ({img})=>{
    //console.log(img)
    return (
        <div className="card animate__bounceInRight 2s">
            <img src={img.url} alt={img.tittle}></img>
            <p>{img.tittle}</p>
        </div>
    );
}
