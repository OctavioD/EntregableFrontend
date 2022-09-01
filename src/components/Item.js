
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import React, {useState} from 'react';


export default function Item(props) {

  let idItem = props.props.item.id;
  let [cantidadStock, setCantidadStock] = useState(props.props.item.stock);
  
  
  const restarStock = () => {
    setCantidadStock(cantidadStock-1);
  }

  const cambioDeStock = () => {
    let boton = document.getElementById(idItem.toString());
    if(cantidadStock > 0 && cantidadStock > 1){
      props.props.metodo.metodoStock();
      restarStock();
    }
    else if(cantidadStock === 1){
      props.props.metodo.metodoStock();
      restarStock();
      boton.innerText = 'SIN STOCK';
    }
    
  }

  return (
    <div className='producto'>
      <h3>{props.props.item.producto.nombre}</h3>
      <p>{props.props.item.producto.descripcion}</p>
      <h5>En stock: <span>{cantidadStock > 0?cantidadStock:'agotado'}</span></h5>
      <button id={idItem} onClick={cambioDeStock}>COMPRAR</button>
    </div>
  )
}
