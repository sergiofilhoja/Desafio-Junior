import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyle = makeStyles({
    header: {
        background: '#162F72'
    },
    links: {
        color: 'white',
        textDecoration: 'none',
        marginRight: 30,
        fontSize: 21,
        fontWeight: 'bold'
    }
})

const NavBar = () => {
    const styled = useStyle()

    return (
        <AppBar className={styled.header} position="static">
            <Toolbar>
                <NavLink className={styled.links} to="/home" exact>sNet</NavLink>
                <NavLink className={styled.links} to="/all" exact>Todos os usuários</NavLink>
                <NavLink className={styled.links} to="/add" exact>Adicionar Usuário</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;