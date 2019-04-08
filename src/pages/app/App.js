import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Pressione o botão para Entrar
          </p>
          <Link className="App-link" to="/home">
            <Button className="btnClass" size="large" variant="contained" color="primary">
              INICIAR
            </Button>
          </Link>
        </header>
      </div>
    );
  };
};

export default App;