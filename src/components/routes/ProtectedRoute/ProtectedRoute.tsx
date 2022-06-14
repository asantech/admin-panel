import { Navigate } from 'react-router-dom';
const Protected = ({ isLoggedIn, children }: any) => {
  if (!isLoggedIn) {
    return <Navigate to='/' replace />;
  }
  return children;
};
export default Protected;
