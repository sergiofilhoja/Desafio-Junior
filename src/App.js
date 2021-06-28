import AddUsuario from './components/AddUsuario';
import AllUsuarios from './components/AllUsuarios';
import Home from './components/Home';
import EditUser from './components/EditUser';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/add" component={AddUsuario} />
        <Route exact path="/all" component={AllUsuarios} />
        <Route exact path="/edit/:id" component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
