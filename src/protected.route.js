
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ children }) => {

const [cookies] = useCookies(['token']);
const token = cookies.token;
console.log(token);
  const userIsLogged = token; // Your hook to get login status

  if (!userIsLogged) {
    window.location.href = '/login';
  }

  return children;
};

export default ProtectedRoute;
