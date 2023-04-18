import axios from "axios";
import Login from '../assets/paginas/login/Login';

export const api = axios.create({
    baseURL:'https://blogpessoal-9ip9.onrender.com'
})

    export const cadastroUsuario =async(url:any, dados:any, setDado:any) => {
        const resposta = await api.post(url, dados)

        setDado(resposta.data)
    }

    export const login =async(url:any, dados:any, setDado:any) => {
        const resposta = await api.post(url, dados)

        setDado(resposta.data.token)
    }