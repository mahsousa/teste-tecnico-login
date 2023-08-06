import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica as credenciais do usuário
    if (text === 'vendemmia' && password === '123123123') {
      setIsAuthenticated(true);
      setShowError(false);
      navigate('/lista'); // Redirecione para a página /lista se o login for bem-sucedido
    } else {
      setIsAuthenticated(false);
      setShowError(true);
    }
  };

  return (
    <Container fluid className="content-form vh-100 vw-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col md="6" className="form border rounded-4 p-5">
            <h2>Acesso</h2>
            {showError && (
              <div className="alert alert-danger" role="alert">
                Credenciais inválidas. Tente novamente.
              </div>
            )}
            {isAuthenticated ? (
              <div className="alert alert-success" role="alert">
                Login bem-sucedido!
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Login</label>
                  <input
                    type="text"
                    className="form-control my-3"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Senha</label>
                  <input
                    type="password"
                    className="form-control my-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Entrar
                </button>
              </form>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Login;
