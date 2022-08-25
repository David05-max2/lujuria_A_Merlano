import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {


    const [ form, setform ] = useState({
        username: 'jerardo2',
         email: 'jerardo@unigu.com'
    })

    const { username, email } = form
    const onInputChange = ({target})=>{

        const  { name, value } = target

        setform({
            ...form,
            [name]:value
        })

    }
//---------------------------------------------------------------------------
// cuando tiene un arreglo vacio al final se dispara una unica vez 
useEffect( ()=>{
       // console.log('useEffect called!')
    },[]) 

    //dispararse cuando el from cambie
    useEffect( ()=>{
       // console.log('form changed!')
    },[form])
    
    //dispararse cuando el email cambie
useEffect( ()=>{
       // console.log('email changed!')
    },[email])  

 
//------------------------------------------------------------------------------
  return (
    <>
    <h1>Formulario simple</h1>
    <hr />
    <input 
    type="text"
    className="form-control"
    placeholder="Username"
    name="username"
    value={username}
    onChange={onInputChange}
     />

    <input 
    type="email"
    className="form-control mt-2"
    placeholder="jerardo@unigu.com"
    name="email"
    value={email}
    onChange={onInputChange} 
    />
        {
           ( username === 'jerardo') && <Message/>
        }
        

    </>
  )
}
