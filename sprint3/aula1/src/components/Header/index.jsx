import { useForm } from "react-hook-form"
import { InputRef } from "../input"
import { useSearchParams } from "react-router-dom";

export const Header =()=>{

    const{ register, handleSubmit } = useForm();
    const [,setSearchParams] = useSearchParams();

    const handSearch =(data)=>{ 
        setSearchParams(data)
        

    }

    return(
        <header>
            <form onSubmit={handleSubmit(handSearch)} >
                <InputRef
                id='search'
                placeholder='Buscar'
                {...register('search')}
            />
            </form>
        </header>
    )
}