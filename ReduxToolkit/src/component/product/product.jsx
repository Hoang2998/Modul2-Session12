import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import  {addProduct , deleteItem , editItem} from "../../store";

export default function Product() {
    console.log(addProduct);
  const [product, setProduct] = useState();
  const [status, setStatus] = useState("ADD");
  const dispatch = useDispatch()
  const data = useSelector(state => { 
    return state.productReducer.products})

const handleClick=()=>{
    if(status == "ADD"){
        dispatch(addProduct(product));
    }else{
        dispatch(editItem({
            product,
            idItem
        }))
        setStatus("ADD")
    }
    setProduct("")
}
const deleteItema =(id)=>{
    dispatch(deleteItem(id))
}
const [idItem,setIdItem] = useState("")  
const editItema =(id)=>{
    setStatus("EDIT")
    setIdItem(id)
    let index = data.findIndex(item => item.id == id)
    setProduct(data[index].name)
}
  return (
  <>
  <h1>AAA</h1>
    {
        data.map((item)=>(
            <li> Name: {item.name} <br></br> Price:{item.price} 
            <button onClick={()=>{deleteItema(item.id)}}>delete</button>
            <button onClick={()=>{editItema(item.id)}}>edit</button>
            </li>
        ))
    }
    <input type="text" onChange={(e)=>setProduct(e.target.value)} value={product}/>
    <button onClick={handleClick}>{status}</button>
  </>
  );
}
