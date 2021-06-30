import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const Cell = (props) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copy = () => {
  const area = document.getElementById("textareaid");
  area.select();
  document.execCommand('copy');
  }

  return (
    <>
      <div>
        <Button variant="outlined" color="primary" style={{height:"25" , width:"50"}} onClick={handleClickOpen}>
          {props.tag}
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" className="ml-auto">
          <Button variant="outlined" color="primary" onClick={copy}>
          copy
        </Button>
        <Button onClick={handleClose} variant="outlined" color="primary" autoFocus>
              close
            </Button>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <textarea id="textareaid" rows="10" cols="60"  value={props.value}></textarea>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Cell;
