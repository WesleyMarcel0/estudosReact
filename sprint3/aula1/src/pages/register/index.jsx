import { useForm } from "react-hook-form"
import {InputRef} from "../../components/input"
import { Input2 } from "../../components/input/index3Forma";
import { useState } from "react";
import { api } from "../../services";
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";
import * as z from 'zod';

const schema = z.object({
    name: z.string().nonempty('Nome é Obrigatorio'),
    author: z.string().nonempty('Nome é Obrigatorio'),
    cover: z.string().url("deve ser uma URL").nonempty("Capa é obrigatoria") ,
    published: z.string().nonempty('Nome é Obrigatorio'),
    numberOfPages: z.coerce.number().min(1,'deve ter no minimo 1 pag.'),
    publishedCompany: z.string().nonempty('Nome é Obrigatorio') ,

})

export const Register = ( )=>{

    const {register,handleSubmit, formState:{ errors }, } = useForm({
        resolver: zodResolver(schema),
    }); //desistruturar e vinculando o zod ao formulario

    const [isTypePassword, setIsTypePassword] = useState(true);
    const navigate = useNavigate();
    
    console.log("Error", errors );

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
                <p>{errors.name?.message}</p>
                {/*quando existir depois do ? vc faz se nao nao faz nada*/}

                <InputRef 
                    type='text'
                    id='author'
                    label='Autor'
                    placeholder='Autor'
                    {...register('author')}
                />
                <p>{errors.author?.message}</p>

                <InputRef 
                    type='text'
                    id='cover'
                    label='Capa'
                    placeholder='ex: https://capa.com'
                    {...register('cover')}
                />
                <p>{errors.cover?.message}</p>

                <InputRef 
                    type='text'
                    id='published'
                    label='publicado em'
                    placeholder='ex Janeiro de 2023'
                    {...register('published')}
                />
                <p>{errors.published?.message}</p>
                
                <InputRef 
                    type='number'
                    id='numberOfPages'
                    label='N° de Paginas'
                    placeholder='ex: XX'
                    {...register('numberOfPages')}
                />
                <p>{errors.numberOfPages?.message}</p>

                <InputRef 
                    type='text'
                    id='publishedCompany'
                    label='Editora'
                    placeholder='editora'
                    {...register('publishedCompany')}
                />
                <p>{errors.publishedCompany?.message}</p>

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