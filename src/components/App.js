import './App.css';
import SignUp from './SignUp';
import { AuthProvider } from '../context/authContext';

function App() {
  return (
    <AuthProvider>
      <SignUp />
    </AuthProvider>
  );
}

export default App;
