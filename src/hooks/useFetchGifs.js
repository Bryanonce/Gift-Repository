import {useState,useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category)=>{
    const [state,setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        setTimeout(() => {
            getGifs(category)
            .then((img)=>{
                setState({
                    data: img,
                    loading: false
                })
            })
        }, 2000);
        
    },[category]);

    return state;
}