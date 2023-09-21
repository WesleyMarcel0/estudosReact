import { useForm } from "react-hook-form"
import {InputRef} from "../../components/input"
import { Input2 } from "../../components/input/index3Forma";
import { useContext, useState } from "react";
import { api } from "../../services";
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";
import { schema } from "./valideitor";
import { AuthContext } from "../../provaiders/AutoProvider";




export const Register = ( )=>{

    const { user } = useContext(AuthContext);
                            // esse formState é um objeto que pode alertar o estado do formulario
    const {register,handleSubmit, formState:{ errors }, } = useForm({
        resolver: zodResolver( schema ),
    }); //desistruturar e vinculando o zod ao formulario

    const [isTypePassword, setIsTypePassword] = useState(true);
    const navigate = useNavigate();
    
    console.log("Error", errors );

    const handleRegister = async (data) =>{

        try {
            await api.post('/books', {... data, userId: user.id }) // cada api tem uma regra para adicionar novas informações essa precisa só do id
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

                {/*fielset aquela caixa em volta do formulario
                   legend é uma escreta que fica no meio da linha */}

                <InputRef 
                    type='text'
                    id='name'
                    label='Nome'
                    error={errors.name?.message}
                    placeholder='Nome'
                    {...register('name')}
                />
                <p>{errors.name?.message}</p>
                {/*quando existir depois do ? vc faz se nao nao faz nada*/}

                <InputRef 
                    type='text'
                    id='author'
                    label='Autor'
                    error={errors.author?.message}
                    placeholder='Autor'
                    {...register('author')}
                />
                

                <InputRef 
                    type='text'
                    id='cover'
                    label='Capa'
                    error={errors.cover?.message}
                    placeholder='ex: https://capa.com'
                    {...register('cover')}
                />
              

                <InputRef 
                    type='text'
                    id='published'
                    label='publicado em'
                    error={errors.published?.message}
                    placeholder='ex Janeiro de 2023'
                    {...register('published')}
                />
                
                
                <InputRef 
                    type='number'
                    id='numberOfPages'
                    label='N° de Paginas'
                    error={errors.numberOfPages?.message}
                    placeholder='ex: XX'
                    {...register('numberOfPages')}
                />
               

                <InputRef 
                    type='text'
                    id='publishedCompany'
                    label='Editora'
                    error={errors.publishedCompany?.message}
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