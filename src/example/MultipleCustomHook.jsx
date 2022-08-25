import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"

export const MultiCustomHook = () => {

    const {counter, increment} = useCounter(1)

    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {author, quote} = !!data && data[0] //=> si la data tiene un valor entonces toma la data en la posicion 0
   // console.log({ data })
    return (
     
    <>
      <h1> BreakingBad Quotes </h1>
      <hr />

        {
            isLoading
             ? (
                <div className="alert alert-info text-center" > Loading.. </div>
            )
            : (
                <>  
                <blockquote className="blockquote text-righ" >
                    <p className="mb-1" >{quote}</p>
                    <div className="blockquote-footer" > {author} </div>
                </blockquote>

                </>
            )
        }
       
        <button  className="btn btn-primary" onClick={ () => increment(1)  } > Next quote  </button>

        <blockquote className="blockquote text-end" >
                    <p className="mb-1" ><i className="fa-brands fa-react"></i>React</p>
                    <footer className="blockquote-footer" > Jerardo Romero </footer>
        </blockquote>
    </>
  )
}
