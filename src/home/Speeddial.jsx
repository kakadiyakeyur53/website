import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";



const Clicked = () => {
  window.location.href = "www.youtube.com";
};

const useStyles = makeStyles((theme) => ({
  root: {
    transform: "translateZ(0px)",
    flexGrow: 1,
  },
  exampleWrapper: {
    position: "relative",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  speedDial: {
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));



const Speeddial = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };



  return (
    <>
      <div className={classes.root}>
        <div className={classes.exampleWrapper}>
          <SpeedDial
            ariaLabel="SpeedDial example"
            className={classes.speedDial}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction="right"
          >
              <SpeedDialAction
                key="instagram"
                icon={<FileCopyIcon/>}
                tooltipTitle="instagram"
                onClick={Clicked}
              />
          </SpeedDial>
        </div>
      </div>
    </>
  );
};

export default Speeddial;
