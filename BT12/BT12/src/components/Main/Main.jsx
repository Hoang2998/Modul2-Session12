import React, { useRef, useState } from 'react'
import{useSelector,useDispatch} from 'react-redux'
// import { store } from '../../store'
import { actions } from '../../store/Actions/actions';

export default function Main() {
    const data = useSelector(store=>store)
    const uuid =()=>{
        return Math.floor(Math.random()*99999)
    }
    const [newCar,setNewCar] =useState({
        name:"",
        price:"",
        quantity:"",
        id:uuid()
    })
    console.log(data);
    const dispatch = useDispatch()

    const changeValue = (e)=>{
        const {name,value} = e.target
        setNewCar({...newCar,[name]:value})
    }
    const addNewCar = () =>{
        if(status.current == "Add new Car" && newCar.name != "" && newCar.price != "" &&  newCar.quantity != ""){
            dispatch(actions("ADD",newCar))
        }else{
            dispatch(actions("EDIT",newCar,index.current))
            status.current = "Add new Car"
        }
        setNewCar({
            name:"",
            price:"",
            quantity:"",
            id:uuid()
        })
    }

    const deleteCar = (id) =>{
        alert("ban co muon xoa ko ?")
        dispatch(actions("DELETE",id))
        status.current = "Add new Car"
        setNewCar({
            name:"",
            price:"",
            quantity:"",
            id:uuid()
        })
    }
    const status = useRef("Add new Car")
    const index = useRef("")
    const editCar =(id)=>{
        let arr = data.find(item => item.id == id)
        status.current = `Edit`
        index.current = id
        setNewCar(arr)

    }
  return (
    <>
    <h1>Store Car</h1>
    <button onClick={addNewCar}>{status.current}</button>
    <div>
        <input type="text" onChange={changeValue} name='name' placeholder='Name' value={newCar.name} />
        <br />
        <input type="text" onChange={changeValue} name='price' placeholder='Price'value={newCar.price} />
        <br />
        <input type="text" onChange={changeValue} name='quantity' placeholder='Quatity'value={newCar.quantity} />
    </div>

    <div style={{width:"200px",margin:"2rem",display:"grid",
    gridTemplateColumns:"auto auto auto auto ",gap:"1rem",}}>
        {
            data.map((item,index)=>{
                return <div style={{textAlign:"center",backgroundColor:"black",color:"white"}}>
                            <img width={200} 
                            src="https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwZXJjYXJ8ZW58MHx8MHx8fDA%3D" alt="" />
                            <p>{item.name}</p>
                            <p>{item.price}$</p>
                            <p> Quantity:{item.quantity}</p>
                            <div><button style={{width:"50%"}} onClick={()=>deleteCar(item.id)}>delete</button><button onClick={()=>editCar(item.id)} style={{width:"50%"}}>edit</button></div>
                        </div>
            })
        }
    </div>    
    </>
  )
}
