import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog =()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen} style ={{color : 'white',fontWeight:'bold',}} >
        Ecrire un message
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ecrivez-moi</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pour m'écrire un message. Veuillez incrire sur les champs ci-dessous votre <span>adresse e-mail</span> et votre  <span>message</span>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address E-mail"
            type="email"
            fullWidth
            style ={{color : '#008100'}}
          />
          <TextField
          id="outlined-multiline-static"
          label="Message"
          type="text"
          multiline
          rows={7}
          fullWidth
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" style ={{color : 'red',}}>
            Annuler
          </Button>
          <Button onClick={handleClose} color="primary" style ={{color : 'blue',}}>
            Envoyer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;