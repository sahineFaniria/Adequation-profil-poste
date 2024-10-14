import './App.css';
import Login from './Components/Auth/Login';
import PrivateRoute from './Utils/PrivateRoute';

function App() {
  return (
    <PrivateRoute/>
  );
}

export default App;
