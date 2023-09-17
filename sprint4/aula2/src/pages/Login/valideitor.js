import * as z from 'zod';

export const schema = z.object({ // o coerce converte no que esta a sua frente
    
    email: z.string().nonempty('Email é obrigatorio'),
    password: z.string().nonempty('senha incorreta'),

})