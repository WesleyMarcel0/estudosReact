import * as z from 'zod';

export const schema = z.object({ // o coerce converte no que esta a sua frente
    
    email: z.email().nonempty('Nome é Obrigatorio'),
    password: z.coerce.number().min(1,'deve ter no minimo 1 pag.'),

})