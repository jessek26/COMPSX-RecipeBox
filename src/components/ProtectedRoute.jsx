import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    //show loading spinner while checking authentication
    if (isLoading) {
        return <LoadingSpinner />;
    }

    if(!isAuthenticated) {
        return <Navigate to='/login' replace />;
    }

    //if not authenticated 
    if(!isAuthenticated) {
        return <Navigate to="/login" state={{from: location.pathname}} replace />;
    }

    //if authenticated, render component
    return children
}

export default ProtectedRoute;