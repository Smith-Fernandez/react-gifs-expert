import { useState } from "react"
import {AddCategory,GifGrid} from './components';



export const GifExpertApp = () => {
  
  const [ categories, setCategories ] =  useState(['One Punch']);
  

  const onAddCategory = (newCategory) =>{

    if(categories.includes(newCategory)) return; // para validar si una categoria ya existe
     console.log(newCategory);
    //newCategory = newCategory.toUpperCase(); 
    //setCategories((c) => c.push('Death Note')) ; 
    //setCategories([...categories,'Death Note']); // ...categories --> se utiliza el operador spred de las categorias
    setCategories( cat =>[newCategory,...cat])
    //setcate
  }  

  


  return (
    <>
      {/* titulo */}
     <h1>GitExpertApp</h1>

        <AddCategory /*setCategories={setCategories}*/ onNewCategory={(value) => onAddCategory(value)} ></AddCategory>
 
          {
          categories.map((category) => 
             (
              <GifGrid key={category} category={category}/>
             )
             
          )
          }
  

    </>
  )
}




