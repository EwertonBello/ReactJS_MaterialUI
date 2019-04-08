import React, { Component } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './Details.css';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {main: grey[900]}
  }
});


class Details extends Component {

  constructor(){
    super();

    this.state = {
      film: [],
      img: ""
    };
  };

  /* componentWillMount() {
    this.setState({ film: this.props.location.state.film, img: this.props.location.state.img });
    
  }; *///Obsoleto!
  static getDerivedStateFromProps(props) {
    return {  film: props.location.state.film, img: props.location.state.img };
  };


  render() {
    
    const cardFilm=(
      <Card className="card">
      <CardActionArea>
        <CardMedia
          className="mediaDetails"
          image={this.state.img}
          title={this.state.film.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {this.state.film.title}
          </Typography>
          <Typography component="p">
          {this.state.film.opening_crawl}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );

    /*
    return (
    <div>
    <h1>Título: {this.state.film.title}</h1>
    <h1>Descrição: {this.state.film.opening_crawl}</h1>
    
    </div>
      );
  }*/
  return (
      
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={()=>this.props.history.goBack()} color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Details
          </Typography>
        </Toolbar>
      </AppBar>
      {cardFilm}
    </MuiThemeProvider>
    );
  }
}

export default Details;
