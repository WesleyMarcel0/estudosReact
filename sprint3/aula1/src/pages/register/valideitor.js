import * as z from 'zod';

export const schema = z.object({ // o coerce no number tava convertendo em um numero
    
    name: z.string().nonempty('Nome é Obrigatorio'),
    author: z.string().optional(),
    cover: z.string().url("deve ser uma URL").nonempty("Capa é obrigatoria") ,
    published: z.string().nonempty('Nome é Obrigatorio'),
    numberOfPages: z.coerce.number().min(1,'deve ter no minimo 1 pag.'),
    publishedCompany: z.string().nonempty('Nome é Obrigatorio') ,

})