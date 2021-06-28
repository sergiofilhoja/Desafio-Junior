import React, { useState } from "react";

import NavBar from '../components/NavBar'
import { 
    FormControl, 
    FormGroup, 
    Input, 
    InputLabel, 
    Container, 
    makeStyles, 
    Button
} from "@material-ui/core";
import InputMask from 'react-input-mask';

import { useHistory } from 'react-router-dom'
import { addUser } from './../services/api'

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
    },

    inputStyle: {
        border: 'none',
        borderBottom: '2px solid gray',
        padding: '10px 0 10px',
        fontSize: 16,
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

const AddUsuario = () => {
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
    const history = useHistory()

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const adicionarUsuario = async () => {
        await addUser(user)
        history.push('./all')
    }

    // Função inacabada
    // function onBlurCep(ev, setUser) {
    //     const { value } = ev.target;

    //     const cep = value?.replace(/[^0-9]/g, '');

    //     if (cep?.length !== 8) {
    //         return;
    //     }

    //     fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setUser(data.endereco);
    //             setUser(data.estado);
    //             setUser(data.localidade);
    //             setUser(data.pais);
    //         });
    // }
    

    return (
        <>
            <NavBar />
            <Container>
                <h1 className={styled.h1User}>Adicionar Usuário</h1>
                <FormGroup className={styled.form}>
                    <FormControl>
                        <InputLabel>Nome</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} value={name} name='name' />
                    </FormControl>
                    <FormControl>
                        <InputMask 
                            mask="(99) 9 9999-9999"
                            placeholder="Telefone"
                            onChange={(e) => onValueChange(e)} 
                            value={telefone} 
                            name='telefone'
                            className={styled.inputStyle}
                        />
                    </FormControl>
                    <FormControl>
                        <InputMask
                            mask="99999-999"
                            placeholder="CEP"
                            onChange={(e) => onValueChange(e)} 
                            // onBlur={(t) => onBlurCep(t, setUser)}
                            value={cep} 
                            name='cep'
                            className={styled.inputStyle}
                        />
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
                        onClick={() => adicionarUsuario()}
                    >
                        Adicionar Usuário
                    </Button>
                </FormGroup>
            </Container>
        </>
    )
}

export default AddUsuario;