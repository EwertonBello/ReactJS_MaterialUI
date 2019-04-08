import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from 'react-router-dom';

import './ListApi.css';

const API = 'https://swapi.co/api/films/';
const IMAGE = 'https://www.desktopbackground.org/p/2014/03/24/736572_star-wars-logo-wallpapers-wallpapers-cave_1600x900_h.png';

class ListApi extends Component {
  constructor(){
    super();

    this.state = {
      films: [],
      isLoading: false,
      error: null,
    };
  }


  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Alguma coisa não deu certo...');
        }
      })
      .then(film => this.setState({ films: film.results, isLoading: false }))
        .catch(error => this.setState({error, isLoading: false}));
  }
  _openDetails(film){
    this.props.history.push('/details', { film: film, img: IMAGE });
  };


  render() {
    
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    if (this.state.isLoading) {
      return <CircularProgress size={90} className="progress" />
    }
      return (

         <List>
         {this.state.films.map((film) => (           
           <ListItem button key={film.episode_id} onClick={()=>this._openDetails(film)}>
        <ListItemAvatar>
          <Avatar alt={film.title} src={IMAGE} />
        </ListItemAvatar>
             <ListItemText primary={film.title} />
           </ListItem>
         ))}
       </List>
      
        );
    
  }
}

export default withRouter(ListApi);
