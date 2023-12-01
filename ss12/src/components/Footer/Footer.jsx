import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { action } from '../../store/Action/Action';



export default function Footer() {
    const data = useSelector(store => store);
    const dispat = useDispatch();
    const handleClick = ()=>{
        dispat(action("DECREASE",2))
    }
    console.log("Data",data);
  return (
    <div
        >
        <button onClick={handleClick}> click giam </button>
    </div>
  )
}