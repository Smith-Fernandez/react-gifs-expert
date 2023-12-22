import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) =>{
     //console.log(target.value)
     setInputValue(target.value);
  }

  const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;/*validacion para que no acepte espacion vacios*/
        console.log(inputValue);

        onNewCategory(inputValue.trim());
        // setCategories
        //setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
    }

    return (
  
   <form onSubmit={(event) => onSubmit(event)}>
        <input type="text" placeholder="buscar gif" value={inputValue} onChange={ onInputChange } />
 
   </form>     
  
   


  )
}

export default AddCategory
