import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  //intialize userm isAuthenticated, loout, adn navigate
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  //logout method 
  const handleLogout = () => {
    logout();
    navigate('/');
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyDown = (e) => {
    if ((e).key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="app-title">🍳 RecipeBox</Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
        </nav>
        <div className="auth-section">
          {isAuthenticated ? (
            <div className="user-info">
              <span className="usernme">👤 {user.username}</span>
              {user.role === 'admin' && (
                <span className="admin-badge">Admin</span>
              )}
              <button onClick={handleLogout} className='logout-button'></button>
            </div>
          ) : (
            <Link to='/login' className="login-link">Login</Link>
          )}
        </div>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search recipes..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;