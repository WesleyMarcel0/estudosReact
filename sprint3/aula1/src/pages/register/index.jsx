import { useForm } from "react-hook-form"
import {InputRef} from "../../components/input"
import { Input2 } from "../../components/input/index3Forma";
import { useState } from "react";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
export const Register = ( )=>{

    const {register,handleSubmit} = useForm(); //desistruturar
    const [isTypePassword, setIsTypePassword] = useState(true);
    const navigate = useNavigate();
    
    console.log("renderizando!");

    const handleRegister = async (data) =>{

        try {
            await api.post('/books', data)
            navigate('/home')

        } catch (error) {
            console.error(error)
        }

    }

    return(
    <main>
        <section>
            <h1>registro</h1>

            <form onSubmit={handleSubmit(handleRegister)} >
                <InputRef 
                    type='email'
                    id='email'
                    label='Email'
                    placeholder='test@gmail.com'
                    {...register('email')}
                />

                <Input2
                    type={isTypePassword ? 'password' : 'text'}
                    id='password'
                    label='Password'
                    placeholder='senha'
                    register= {register('password')}
                >
                    <button onClick={()=>setIsTypePassword(!isTypePassword)} >mostrar</button>
                </Input2>

                <input type="text" {...register('text')} />
                

                <button type="submit">Cadastrar</button>

            </form>
        </section>
    </main>
    );
};