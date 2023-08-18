import { useForm } from "react-hook-form"

export const Register = ( )=>{

    const {register,handleSubmit} = useForm(); //desistruturar
    
    console.log("renderizando!");

    const handleRegister = (data) =>{
        console.log(data);
    }

    return(
    <main>
        <section>
            <h1>registro</h1>

            <form onSubmit={handleSubmit(handleRegister)} >
                <input type="email" {...register('email')}
                   // name={register('name'.name)} 
                   // onChange={register('name').onChange}
                   // onBlur={register('name').onBlur} 
                   />
                <input type="text" {...register('text')} />

                <button type="submit">Cadastrar</button>

            </form>
        </section>
    </main>
    );
};