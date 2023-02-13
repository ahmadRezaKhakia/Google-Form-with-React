import './App.css';
import SingUp from './components/signUp';
import Login from './components/login';
import { Switch , Route , Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SingUp} />
        <Redirect from='/' to = '/signup'/>
      </Switch>
    </div>
  );
}

export default App;
