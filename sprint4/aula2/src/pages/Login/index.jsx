import { useForm } from "react-hook-form"
import {InputRef} from "../../components/input"
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from "./valideitor";
import { useContext } from "react";
import { AuthContext } from "../../provaiders/AutoProvider";




export const Login = ( )=>{
    const { signIn } = useContext(AuthContext);
    // esse formState é um objeto que pode alertar o estado do formulario
    const {
        register,
        handleSubmit, 
        formState:{ errors }, 
    } = useForm({
        resolver: zodResolver( schema ),
    }); //desistruturar e vinculando o zod ao formulario





    return(
    <main>
        <section>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(signIn)} >

                <InputRef 
                    type='email'
                    id='email'
                    label='E-mail'
                    error={errors.email?.message}
                    placeholder='@gmail.com'
                    {...register('email')}
                />

                <InputRef 
                    type='password'
                    id='password'
                    label='Senha'
                    error={errors.password?.message}
                    placeholder='Senha'
                    {...register('password')}
                />

                <button type="submit">Entrar</button>

            </form>
        </section>
    </main>
    );
};