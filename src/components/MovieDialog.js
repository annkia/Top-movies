
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardMedia from '@material-ui/core/CardMedia';
import './MovieDialog.css';



export default class MovieDialog extends React.Component {

  render() {
      const{movie,handleClose}=this.props;
        let title=null;
      let content=null;
      
    if(movie){
        title=<DialogTitle id="form-dialog-title">{movie.title}</DialogTitle>
        
        content= <DialogContent>
            <DialogContentText>
              {movie.overview}
            </DialogContentText>
             <CardMedia
          className="movie-detail-image"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
        />
            <TextField
                label="Release date"
                type="date"
                value={movie.release_date}
                disabled
              fullWidth
            />
          </DialogContent>
    }  
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog
          open={!!movie}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {title}
          {content}
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
