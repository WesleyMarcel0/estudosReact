import axios from 'axios';

export const api = axios.create({
    baseURL: 'o https vai aqui da API',
    Timeout: 8000, 
})

// igual a 8 segundos
