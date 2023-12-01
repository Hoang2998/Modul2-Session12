import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { action } from '../../store/Action/Action';
import { useRef } from 'react';
import { store } from '../../store';
export default function Header() {
    const data = useSelector(store => store);
    const dispat = useDispatch();
    const uuid = ()=>{
        return Math.floor(Math.random()*99999)
    }
    const [newJob,setNewJob] = useState({
        name:"",
        age:"",
        id:uuid(),
    })
    
    const changeValue = (e)=>{
        const {name,value} = e.target
        setNewJob({...newJob,[name]:value})
    }
    const addNewJob = ()=>{
        if(status.current == "ADD" && newJob.name != "" && newJob.age != ""){
        dispat(action("ADD",newJob))   
        }else if(status.current == "EDIT" ){
            dispat(action("EDIT",newJob,index.current ))
            status.current = "ADD"
        }
        setNewJob({
            name:"",
            age:"",
            id:uuid(),
        })
        
    }
    const status = useRef("ADD")

    const  deleteJoba =(id)=>{
            dispat(action("DELETE",id))
            setNewJob({
                name:"",
                age:"",
                id:uuid(),
            })
            status.current = "ADD"
    }
    const index = useRef("")
    const editJoba = (id)=>{
        status.current = "EDIT"
        index.current = id
        let arr = [...data.Job]
        let indexEdit =  arr.find(item=>item.id == id)
        setNewJob(indexEdit)
    }
    const [search,setSearch] = useState("")
    const arr = data.Job.filter((user) => user.name.toLowerCase().includes(search))
  return (
    <div>
        <input type="text"  placeholder='tim kiem theo ten' onChange={(e)=>setSearch(e.target.value)} />
        <button>Find</button>
        <br />
        <input type="text"  placeholder='Name' name='name' onChange={changeValue} value={newJob.name}/>
        <br />
        <input type="text" placeholder='Age'  name='age' onChange={changeValue} value={newJob.age}/>
        <br />
        <button onClick={addNewJob}>{status.current}</button>
        <br></br>
        {
            arr.map((item,index)=>{
                return <li key = {item.id}>{item.name} : {item.age} 
                <button onClick={()=>{deleteJoba(item.id)}}>DELETE</button> 
                <button onClick={()=>{editJoba(item.id)}}>EDIT</button></li>
            })
        }
    </div>
  )
}
