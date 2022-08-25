import { useEffect, useState } from "react"


export const Message = () => {

    const [coordenadas, setcoordenadas] = useState({x:0, y:0})

    useEffect(() => {

        const onMouseMove = ( { x, y } ) =>{
            setcoordenadas({x,y})
        }

        window.addEventListener( 'mousemove', onMouseMove )
    
      return () => {
          window.removeEventListener( 'mousemove', onMouseMove )
      }
    }, [])
    

  return (
      
      <>
      <h3 className="display" >Usuario ya existe</h3>
      { JSON.stringify( coordenadas ) }
    
    </>
  )
}
