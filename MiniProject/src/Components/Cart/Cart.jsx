import React,{useEffect, useRef, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { action } from '../Store/action/action'
import './Cart.scss'
export default function Cart() {
  const [product,setProduct] = useState([])
  const data = useSelector(store => store)
  console.log(data);
  const dispatch = useDispatch()
  const increaseQuantity=(id)=>{
    dispatch(action("INCREASE",id))
  }
  const decreaseQuantity=(id)=>{
    dispatch(action("DECREASE",id))
  }
  const deleteItem=(id)=>{
    alert("Bạn muốn xóa không?")
    dispatch(action("DELETE",id))
  }
 
  useEffect(()=>{
      let total = data.reduce((a,b)=>{
        return a + b.quantity*b.price 
      },0)
      setProduct(total)
  },[data])
  return (
    <>
    <div style={{paddingTop:"150px"}}>
    <table className='cart'>
      <thead>
          <th>STT</th>        
          <th>Product</th>        
          <th>Name</th>        
          <th>Quantiy</th>        
          <th>Price</th>
          <th>Total</th>        
          <th>Action</th>        
      </thead>
      <tbody>
      {
        data.map((item,index)=>{
          return <tr key={index}>
            <td>
              {index+1}
            </td>
            <td>
              <img src={item.img} alt="" width={100} height={70}/>
            </td>
            <td>
              {item.name}
            </td>
            <td >
              <button onClick={()=>{decreaseQuantity(item.id)}}>-</button>
              <p style={{display:"inline-block",width:"2rem"}}>
              {item.quantity}
              </p>
              <button onClick={()=>{increaseQuantity(item.id)}}>+</button>

            </td>
            <td>
              {item.price} $
            </td>
            <td>
             {item.price * item.quantity} $
            </td>
            <td>
              <button className='cart--btn' onClick={()=>{deleteItem(item.id)}} >delete</button>
            </td>
          </tr>
        })
      }
      </tbody>
      <tfoot>
        <td colSpan={5}>Total:</td>
        <td colSpan={2}>{product}</td>
      </tfoot>
      
    </table>
    </div>
    </>
  )
}
