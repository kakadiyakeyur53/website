import React, { useState } from "react";
import emailjs from "emailjs-com";

import { init } from "emailjs-com";
init("user_18mr8uYvWobONuR4EP0zL");

const Suggetion = () => {
  const [Mail, setMail] = useState();
  const [Name, setName] = useState();
  const [Suggetions, setSuggetions] = useState();

  const changeMail = (event) => {
    setMail(event.target.addEventListener.value);
  };

  const changeName = (event) => {
    setName(event.target.addEventListener.value);
  };
  const changeSuggetions = (event) => {
    setSuggetions(event.target.addEventListener.value);
  };

  const submit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("default_service", "keyur_kakadiya", "#suggetionform")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    setMail("");
    setName("");
    setSuggetions("");
  };

  return (
    <>
      <div className="col-md-6 mx-auto my-5">
        <form onSubmit={submit} id="suggetionform">
          <div class="form-group">
            <label for="mail-id">mail-id</label>
            <input
              type="email"
              name="mail-id"
              class="form-control"
              id="mail-id"
              aria-describedby="emailHelp"
              value={Mail}
              onchange={changeMail}
            />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              value={Name}
              onchange={changeName}
            />
          </div>

          <div class="form-group">
            <label for="suggetion">suggetion</label>
            <textarea
              type="textarea"
              name="suggetion"
              class="form-control"
              id="suggetion"
              value={Suggetions}
              onchange={changeSuggetions}
            />
          </div>

          <input
            type="submit"
            class="btn btn-primary"
            onClick={submit}
            id="button"
            value="send"
          />
        </form>

        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
        ></script>
      </div>
    </>
  );
};

export default Suggetion;
