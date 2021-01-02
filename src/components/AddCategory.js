import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories})=>{
    //variable
    const [inputValue, setInputValue] = useState('');
    //funcion handle
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(categories => [inputValue.trim(),...categories]);
            setInputValue('');
        }
    }
    //return
    return <form onSubmit={handlesubmit}>
        <input 
            type="text" 
            placeholder="Escribir"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}