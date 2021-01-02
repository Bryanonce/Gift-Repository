import React from 'react';

//Custom Hooks
import {useFetchGifs} from '../hooks/useFetchGifs';

//Importar components
import {GiftGridItem} from './GiftGridItem';


export const GriftGrid = ({category})=>{
    const {data:images,loading} = useFetchGifs(category);
    console.log(loading);

    return <>
    <h3>{category}</h3>

    {loading && <p>Loading...</p>}

    <div className="card-grid">
            {
                images.map((img)=>{
                    return <GiftGridItem 
                        key={img.id}
                        img={img}
                    />
                })
            }
    </div>
    </>
}