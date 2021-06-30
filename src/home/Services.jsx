import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import table from "./../photoes/home/table.jpg";
import review from "./../photoes/home/review.jpg";
import others from "./../photoes/home/others.jpg";
import learning from "./../photoes/home/learning.jpg";
import examples from "./../photoes/home/examples.jpeg";
import cources from "./../photoes/home/cources.jpg";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const Item = (props) => {
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
}




const Services = () => {
    return (
        <>
        <h1 className="mt-5 text-center"> :we provide this services:</h1>
        <div className="row">
        <NavLink className="col-sm-4 my-2 btn text-left" to="/table"><Item img={table} title="table"  content="in this section we provide  pereodic table for content" button="tables"/>
        </NavLink>
            <NavLink className="col-sm-4 my-2 btn text-left" to="/cources">
              <Item title="cources" img={cources} content="different cources are provided for teaching purpose" button="cources"/>
              </NavLink>
            <NavLink className="col-sm-4 my-2 btn text-left" to="/learning">
              <Item title="learning" img={learning} content="different cource's documentation are  provided" button="learning"/>
              </NavLink>
            <NavLink className="col-sm-4 my-2 btn text-left" to="/others">
              <Item title="others" img={others} content="others for purpose" button="others"/>
              </NavLink>
            <NavLink className="col-sm-4 my-2 btn text-left" to="/suggetion-review">
              <Item title="review" img={review} content="ask your doubts here we will give you solution" button="review"/>
              </NavLink>
            <NavLink className="col-sm-4 my-2 btn text-left" to="/examples">
              <Item title="examples" img={examples} content="examples and solution of frequently asked question" button="examples"/>
              </NavLink>
            </div>
        </>
    );


}

export default Services;