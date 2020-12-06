import './App.css';
import SignUp from './SignUp';
import { AuthProvider } from '../context/authContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/dashboard'>
            <Login />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
