import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Scrollbars } from "react-custom-scrollbars";
import PersonIcon from "@material-ui/icons/Person";

const Display = (props) => {
  return (
    <>
      <div className="card mb-3" style={{ width: "500px" }}>
        <div className="row no-gutters">
          <div className="col-md-2 text-center">
            <PersonIcon className="text-center" />
            <h5>{props.name}</h5>
          </div>
          <div className="col-md-8">
            <Rating
              name="rating"
              defaultValue={props.star}
              readOnly="true"
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
            <h6>{props.message}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

const Review = () => {
  const [review, setreview] = useState([]);

  const [name, setname] = useState();
  const [message, setmessage] = useState();
  const [star, setstar] = useState(0);

  const changename = (event) => {
    setname(event.target.value);
  };
  const changemessage = (event) => {
    setmessage(event.target.value);
  };
  const changestar = (event) => {
    console.log(event.target.value);
    setstar(event.target.value);
  };

  const publice = (event) => {
    event.preventDefault();
    console.log(star);
    setreview((prev) => {
      return [
        {
          username: name,
          usermessage: message,
          userstar: star,
        },
        ...prev,
      ];
    });
    setname("");
    setmessage("");
    console.log(star);
    setstar("0");
    console.log(star);
  };

  return (
    <>
      <div className="col-md-6 mx-auto my-5">
        <form>
          <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Rating</Typography>
              <Rating
                id="rating"
                name="customized-empty"
                defaultValue={0}
                value={star}
                onChange={changestar}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>

            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
              value={name}
              onChange={changename}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">review</label>
            <textarea
              type="textarea"
              class="form-control"
              id="exampleInputPassword1"
              value={message}
              onChange={changemessage}
            />
          </div>
          <button class="btn btn-primary" onClick={publice}>
            publice
          </button>
        </form>

        <div className="my-5">
          <Scrollbars style={{ width: "100%", height: "500px" }}>
            {review.map((val, index) => {
              return (
                <>
                  <Display
                    name={val.username}
                    star={val.userstar}
                    message={val.usermessage}
                  />
                </>
              );
            })}
          </Scrollbars>
        </div>
      </div>
    </>
  );
};

export default Review;
