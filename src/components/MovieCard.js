import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import './MovieCard.css';



class MovieCard extends React.Component{
    render(){
        const {movie}=this.props;
    
       return(
        <Card className='movie-card'>
         <CardMedia
          className="movie-image"
          image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {movie.title}
          </Typography>
          <Typography component="p">{movie.overview}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn more
          </Button>
        </CardActions>
      </Card>
       )
    }
    
}

export default MovieCard;