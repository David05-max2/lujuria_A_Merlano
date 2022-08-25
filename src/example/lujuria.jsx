import { useEffect, useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { dataLujuria } from "./dataLujuria"


export const Lujirua = () => {

    const {counter, increment , reset} = useCounter(0)

   // const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const data = dataLujuria()

   const desicion = () =>{
    ( counter < 9 ) ?(increment(1)):(reset())
   }
   

    const {frase1, frase2, frase3 , frase4 ,libro,url} = data[counter]
    return (
     
    <>
      <h1 className="text-center"> Lujuria </h1>
      <hr />
        <div className="container ">
            

            <div className="row my-2 d-flex justify-content-center ">
                
                <div className="col-9 col-sm-8  col-md-10 col-lg-8  opaci my-3">
                    <div className="card">
                       <img src={url} alt="" width="100%" />
                        <div className="card-body">
                            <blockquote className="blockquote text-righ" >
                            <p className="mb-1" >{frase1}</p>
                            <p className="mb-1" >{frase2}</p>
                            <p className="mb-1" >{frase3}</p>
                            <p className="mb-1" >{frase4}</p>
                            <div className="blockquote-footer mt-1" > {libro} </div>
                        </blockquote>
                        <button  className="btn btn-primary" onClick={ () => { desicion()  }  } > Siguiente  </button>
                
                        </div>
                    </div>
			    </div>



               
            </div>
        </div>           
      
   

                
         
    
       
   
        <blockquote className="blockquote text-end" >
                    <p className="mb-1" ><i className="fa-brands fa-react"></i>React</p>
                    <footer className="blockquote-footer" > J.Romero </footer>
        </blockquote>
    </>
  )
}
