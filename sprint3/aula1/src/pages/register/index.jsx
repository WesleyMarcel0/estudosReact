import { useState } from "react"


export const Register =()=>{

    const [form, setForm] = useState({
        email:'',
        name:'',
    });


    function handleSubmit(event) {
        event.preventDefaul();

        console.log(form);
    }


    return(
    <main>
        <section>
            <h1>registro</h1>

            <form onSubmit={handleSubmit} >
                <input 
                    type="email" 
                    name="email" 
                    onChange={(event) => setForm({...form, email:event.target.value})} />
                <input 
                    type="text" 
                    name="name" 
                    onChange={(event) => setForm({...form, name:event.target.value})} />
                <button type="submit">Cadastrar</button>

            </form>
        </section>
    </main>
    )
}