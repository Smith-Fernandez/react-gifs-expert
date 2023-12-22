
import {GifItem} from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";







export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs (category);
       
    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>cargando...</h2>)   // and logico
            //isLoading ? <h2>cargando...</h2> : null  // validacion ternaria
        }
        
        <div className="card-grid">
            {
                images.map((image)=>(
                    <GifItem key={ image.id } {...image}/>    // "..." esto es el operador spred
             
                ))
            }
          
        </div>

    </>
  )
}

export default GifGrid
