import React, { useEffect, useState } from 'react'
import './Body.scss'
import { useSelector,useDispatch } from 'react-redux'
import { action } from '../Store/action/action'
import ReactLoading from 'react-loading';


export default function Boody() {
  const [products,setProducts] = useState([])
  const [check,setChecks] = useState(false)
  const data = useSelector(store => store)
  const dispatch = useDispatch()
  const Example = ( {type, color} ) => (
    <ReactLoading type={type} color={color} height={667} width={375} />
  );

  useEffect(()=>{
    setTimeout(()=>{
      fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setProducts(data)
    })
    setChecks(true)
    },3000)
  },[])
  const addCart=(id)=>{
    const product = products.find(item=>item.id == id)
    dispatch(action("ADDCART",product))
  }
  return (
    <>
    {
      check?<div className='body'>
      {
        products.map((item,index)=>{
          return <div  key={index} style={{width:"250px",backgroundColor:"black",color:"white",margin:"1rem" }}>
              <div>
              <img src={item.img} alt="" width={250} height={200}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"1rem"}}>
                <p>{item.name}</p>
                <p>{item.price} $</p>
              </div>
              <button  onClick={()=>{addCart(item.id)}} className='body--button' style={{width:"100%",padding:"1rem",background:"silver"}}>Add to Cart</button>
          </div>
        })
      }        
</div>: <div style={{display:'flex',justifyContent:"center",alignItems:"center",padding:"200px"}}>
<ReactLoading type={'balls'} color={'black'} height={667} width={375} />
</div> 
    }
      
     
    </>
  )
}
