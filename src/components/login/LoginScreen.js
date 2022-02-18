import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // Para evitar dar acceso de nuevo al login al usuario, debemos mandar un segundo argumento con un objeto, que contenga replace en true, esto como su nombre lo dice, ayudará a reemplazar el login o la página actual por el primer argumento dado.

    const action = {
      type: types.login,
      payload: {
        name: 'Santiago',
      },
    };

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h2>LoginScreen</h2>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
