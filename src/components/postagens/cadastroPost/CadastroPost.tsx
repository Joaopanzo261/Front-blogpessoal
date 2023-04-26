import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';

function CadastroPost() {

    let navigate = useNavigate();
    const{id} = useParams<{id: string}>();
    const [temas, setTema] = useState<Tema []> ([])
    const [token, setToken] = useLocalStorage('token')
  
    useEffect(() =>{
        if(token == '') {
            alert('Você precisa estar logado')
            navigate("/login") 
        }
    }, [token])

    const [tema, SetTema] = useState<Tema>({
        id:0,
        descricao:''
    })

    const[postagens, setPostagens]= useState<Postagens>({
        id:0,
        titulo:'',
        texto:''
    
    })

    useEffect(()=>{
        setPostagens
    })
    return (
        <Container maxWidth="sm" className="topo">
            <form >
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper">
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;