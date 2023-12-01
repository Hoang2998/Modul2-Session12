import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'

export default function Header() {
  const data = useSelector(store => store)
  const dispatch = useDispatch()
  return (
    <>
    <div className='header'>
         <ul className='ul'>
          <Link to={"/"} style={{color:"white",listStyle:"none",textDecoration:"none"}}>
          <li>Home</li>
          </Link>
          <Link to={"/cart"} style={{position:"relative", color:"white",listStyle:"none",textDecoration:"none"}}>
          <li>Cart</li>
          <div style={{position:"absolute", width:"1rem",height:"1rem",borderRadius:"1rem",background:"white",
          color:"black",
          textAlign:"center",
          top:0,
          right:0,
        }}>
         {data.length}
        </div>
          </Link>
        </ul >
        <div className='header_find'>
          <input type="text" />
        </div>
    </div>
    </>
  )
}
