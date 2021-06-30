import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import keyur from "./../photoes/home/keyur.jpg"
import jayanshu from "./../photoes/home/jayanshu.jpg"
import parth from "./../photoes/home/parth.jpg"
import meet from "./../photoes/home/meet.jpg"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Developer = (props) => {
  const classes = useStyles();

  return (
    <div class="col-sm-4 my-2  mx-auto">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="developer"
            style={{height:400}}
            image={props.img}
            title="developer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.developer}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="row">
          <Button size="small" color="primary">
            <InstagramIcon />
          </Button>
          <Button size="small" color="primary">
            <FacebookIcon />
          </Button>
          <Button size="small" color="primary">
            <LinkedInIcon />
          </Button>
          <Button size="small" color="primary">

            <TwitterIcon />

          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const Developers = () => {
  return (
    <>
            <h1 className="mx-auto text-center">:our developers:</h1>
      <div
        id="Developercarousel"
        className="carousel slide col-10 mx-auto"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#Developercarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#Developercarousel" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active ml10">
            <div className="row col-sm-10 mx-auto">
              <Developer img={keyur} name="keyur kakadiya" developer="backend developer" href="keyur.com"/>
              <Developer img={jayanshu} name="jayanshu kikani" developer="designer" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="row col-sm-10 mx-auto">
              <Developer img={meet} name="meet savaj" developer="frontend developer"/>
              <Developer img={parth} name="parth kanapariya" developer="testing and utility"/>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#Developercarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon  bg-primary btn  btn-primary"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#Developercarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon  bg-primary btn  btn-primary"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Developers;
