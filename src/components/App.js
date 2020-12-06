import './App.css';
import SignUp from './SignUp';
import { AuthProvider } from '../context/authContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
