//Import React Library
import React, { useState } from 'react';
//import Components
import {AddCategory} from './components/AddCategory';
import {GriftGrid} from './components/GiftGrid';

export const GiftExpertApp = () => {
    //variable de dato
    const [categories, setCategories] = useState(['One Punch']);
    //funcion handleAdd

    //return
    return <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        <ol>
            {
                categories.map((category) => {
                    return <GriftGrid key={category} category={category}/>
                })
            }
        </ol>
    </>
}