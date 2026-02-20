import { useState } from 'react';
import './Login.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation} from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const [role, setRole] = useState('regular');

  
  //access context and navigation
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation and login logic
    login(username, password, role);
    
    //redirect to where they came from
    navigate(from, { replace: true });

    if(!username || !password) {
        setError('Please enter usrename and password.');
        return;
    }
    //clear prev. errors
    setError('');

    //call login function from AuthContext
    login(username, password, role); 

    //redirect to home page when login is successful
    navigate('/');
    console.log('Login attempted with:', { username, password, role });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to NewsReader</h2>
        <p className="login-subtitle">Access your personalized news experience</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Account Type</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="regular">Regular User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="demo-info">
          <p><strong>Demo Accounts (for testing):</strong></p>
          <p>Any username/password combination will work</p>
          <p>Select "Regular" or "Admin" to test different access levels</p>
        </div>
      </div>
    </div>
  );
}

export default Login;