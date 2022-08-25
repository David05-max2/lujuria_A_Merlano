import { useState } from 'react'


export const useForm = (value = {}) => {
  
    const [ form, setform ] = useState(value)

   
    const onInputChange = ({target})=>{

        const  { name, value } = target

        setform({
            ...form,
            [name]:value
        })

    }
  
    const onResetForm = () => {
        setform( value)
    }

    return{
        ...form,
        form,
        onInputChange,
        onResetForm,
    }
}
