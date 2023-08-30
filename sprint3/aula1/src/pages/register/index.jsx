import { useForm } from "react-hook-form"
import {InputRef} from "../../components/input"
import { Input2 } from "../../components/input/index3Forma";
import { useState } from "react";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
import * as z from 'zod';

const schema = z.object({
    
})

export const Register = ( )=>{

    const {register,handleSubmit} = useForm(); //desistruturar
    const [isTypePassword, setIsTypePassword] = useState(true);
    const navigate = useNavigate();
    
    console.log("renderizando!");

    const handleRegister = async (data) =>{

        try {
         //   await api.post('/books', data)
         //   navigate('/home')
            console.log(data);

        } catch (error) {
            console.error(error)
        }

    }

    return(
    <main>
        <section>
            <h1>registro</h1>

            <form onSubmit={handleSubmit(handleRegister)} >

                {/*fielset aquela caixa em volta do formulario
                   legend é uma escreta que fica no meio da linha */}

                <InputRef 
                    type='text'
                    id='name'
                    label='Nome'
                    placeholder='Nome'
                    {...register('name')}
                />

                <InputRef 
                    type='text'
                    id='author'
                    label='Autor'
                    placeholder='Autor'
                    {...register('author')}
                />

                <InputRef 
                    type='text'
                    id='cover'
                    label='Capa'
                    placeholder='ex: https://capa.com'
                    {...register('cover')}
                />

                <InputRef 
                    type='text'
                    id='published'
                    label='publicado em'
                    placeholder='ex Janeiro de 2023'
                    {...register('published')}
                />
                
                <InputRef 
                    type='number'
                    id='numberOfPages'
                    label='N° de Paginas'
                    placeholder='ex: XX'
                    {...register('numberOfPages')}
                />

                <InputRef 
                    type='text'
                    id='publishedCompany'
                    label='Editora'
                    placeholder='editora'
                    {...register('publishedCompany')}
                />

{/*
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
                
*/}
                <button type="submit">Cadastrar</button>

            </form>
        </section>
    </main>
    );
};