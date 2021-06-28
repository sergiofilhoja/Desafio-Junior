import React, { useState } from "react";

import { 
    FormControl, 
    FormGroup, 
    Input, 
    InputLabel, 
    Container, 
    makeStyles, 
    Button
} from "@material-ui/core";

const useStyle = makeStyles({
    h1User: {
        textAlign: 'center',
        color: '#162F72',
        marginTop: 40
    },

    form: {
        alignItems: 'center',
    },

    label: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10
    },

    input: {
        border: 'none',
        padding: 10,
        fontSize: 16,
    },

    button: {
        width: '90%',
        margin: 10,

        display: 'flex',
        flexDirection: 'row'
    },

    formLogin: {
        background: '#162F72',
        borderRadius: 8,

        padding: 30,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& > *': {
            marginTop: 10,
            padding: 10
        }
    }
})

const initalValue = {
    name: '',
    password: ''
}


const Login = () => {
    const styled = useStyle();
    const [user, setUser] = useState(initalValue)
    const { name, password } = user;

    const login = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        localStorage.setItem('Usuario', user)
    }

    return (
        <>
            <Container>
                <h1 className={styled.h1User}>Login sNet</h1>
                <FormGroup className={styled.form}>
                    <div className={styled.formLogin}>
                        <FormControl>
                            <label className={styled.label}>Usuário</label>
                            <input 
                                className={styled.input} 
                                name='name' 
                                type="filled" 
                                onChange={(e) => login(e)} 
                                value={name}
                            />
                        </FormControl>
                        <FormControl>
                            <label className={styled.label}>Senha</label>
                            <input 
                                className={styled.input} 
                                type="password" 
                                name="password" 
                                onChange={(e) => login(e)} 
                                value={password}
                            />
                        </FormControl>
                        
                        <div className={styled.button}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                className={styled.button}
                                onClick={login}
                                href="/home"
                            >
                                Login
                            </Button>
                            <Button 
                                variant="contained" 
                                color="primary"
                                className={styled.button}
                                href="/home"
                            >
                                Cadastrar
                            </Button>
                        </div>
                    </div>
                </FormGroup>
            </Container>
        </>
    )
}

export default Login;