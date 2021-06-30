import React from "react";
import ToDay from "./Data";
import { YesterDay } from "./Data";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import abc from "./../photoes/home/table.jpg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Cource = (props) => {
  const classes = useStyles();

  return (
    <div class="col-sm-4 my-2  mx-auto">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="developer"
            style={{height:250}}
            image={props.img}
            title="cource"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.discription}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.coupen_code}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <a href={props.link}>link : {props.link}</a>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="row">
        <Button className="btn btn-primary" to={props.link}>
              to cource
            </Button>
        </CardActions>
      </Card>
    </div>
  );
};




const Cources = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1>today's cources:</h1>
            <div className="row">
              {ToDay.map((value, index) => {
                return (
                  <Cource
                    name={value.name}
                    discription={value.discription}
                    coupen_code={value.coupen_code}
                    link={value.link}
                    img={abc}
                  />
                );
              })}
            </div>
            <h1>yesterday's cources:</h1>
            <div className="row">
              {YesterDay.map((value, index) => {
                return (
                  <Cource
                    name={value.name}
                    discription={value.discription}
                    coupen_code={value.coupen_code}
                    link={value.link}
                    img={abc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cources;
