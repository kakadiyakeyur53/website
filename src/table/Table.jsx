import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import clg from "./../photoes/home/table.jpg";
import ScrollingMenu from "../ScrollingMenu";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

const TableCard = (props) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={props.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

const Table = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-9">
                <NavLink
                  to="/table/c"
                  className="btn col-sm-6 my-2 text-left"
                  style={{ width: "100%" }}
                >
                  <TableCard title="c" content="learn c language" img={clg} />
                </NavLink>
                <NavLink
                  to="/table/c"
                  className="btn col-sm-6 my-2 text-left"
                  style={{ width: "100%" }}
                >
                  <TableCard title="c" content="learn c language" img={clg} />
                </NavLink>
              </div>
              <ScrollingMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
