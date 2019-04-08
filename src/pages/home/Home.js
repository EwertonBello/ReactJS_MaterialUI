import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import './Home.css';

import ListApi from '../../components/listapi/ListApi'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {main: grey[900]}
  }
});

class Home extends Component {
  constructor(){
    super();
    this.state = {
      open: false,
    };
  };
  _abrirDrawer = (valor) => () => {
    this.setState({
      open: valor,
    });
  };
  render() {
    const listamenu = (
      <div>
        <List>
        <Link className="Home-link" to="/">
        <ListItem button>
          <ListItemIcon> 
            <HomeIcon /> 
          </ListItemIcon>
          <ListItemText primary="Tela Inicial" />
        </ListItem>
        </Link>
        </List>
       
      </div>
    );


    return (
      
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this._abrirDrawer(true)} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this._abrirDrawer(false)}>
          
         {listamenu}
        </Drawer>
      <ListApi/>
      </MuiThemeProvider>
      );
  };
};

export default Home;
