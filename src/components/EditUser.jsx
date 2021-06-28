import React, { useEffect, useState } from "react";

import { 
    FormControl, 
    FormGroup, 
    Input, 
    InputLabel, 
    Container, 
    makeStyles, 
    Button
} from "@material-ui/core";

import { useHistory, useParams } from 'react-router-dom'
import { editUser, getUsers } from './../services/api'

const useStyle = makeStyles({
    h1User: {
        textAlign: 'center',
        color: '#162F72'
    },

    form: {
        alignItems: 'center',
        '& > *': {
            marginTop: 10,
            width: '50%',
        }
    }
})

const initalValue = {
    name: '',
    telefone: '',
    cep: '',
    endereco: '',
    cidade: '',
    estado: '',
    pais: ''
}

const EditUser = () => {
    const styled = useStyle();
    const [user, setUser] = useState(initalValue);
    const {
        name,
        telefone,
        cep,
        endereco,
        cidade,
        estado,
        pais
    } = user;
    const { id } = useParams();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    // Edita e faz alteração do usuário
    const editUserData = async () => {
        await editUser(id, user)
        history.push('./all')
    }

    // Carrega os dados do usuário requisitado.
    const loadUsers = async () => {
        const response = await getUsers(id)
        setUser(response.data)
        console.log(response.data)
    }
    
    // Escuta a chamada de carregamento de dados do usuário
    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <Container>
            <h1 className={styled.h1User}>Editar Usuário</h1>
            <FormGroup className={styled.form}>
                <FormControl>
                    <InputLabel>Nome</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} value={name} name='name' />
                </FormControl>
                <FormControl>
                    <InputLabel>Telefone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} value={telefone} name='telefone' />
                </FormControl>
                <FormControl>
                    <InputLabel>CEP</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} value={cep} name='cep' />
                </FormControl>
                <FormControl>
                    <InputLabel>Endereço</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} value={endereco} name='endereco' />
                </FormControl>
                <FormControl>
                    <InputLabel>Cidade</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} value={cidade} name='cidade' />
                </FormControl>
                <FormControl>
                    <InputLabel>Estado</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} value={estado} name='estado' />
                </FormControl>
                <FormControl>
                    <InputLabel>País</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} value={pais} name='pais' />
                </FormControl>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => editUserData()}
                >
                    Editar Usuário
                </Button>
            </FormGroup>
        </Container>
    )
}

export default EditUser;