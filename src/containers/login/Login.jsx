import React, { Suspense } from "react";
import { LoginAvatar } from "../../assets";
import { Button, Images, Input } from "../../components";
import "./login.css";

const Login = () => {
  return (
    <section className="sukmav2__login section__padding">
      <div className="sukmav2__login-container ">
        <div className="sukmav2__login-container-left">
          <Images src={LoginAvatar} />
        </div>
        <div className="sukmav2__login-container-right">
          <form className="sukmav2__login-container_right-form">
            <h1>Sign In</h1>
            <Input type="text" id="email" name="email" placeholder="Email" />
            <Input
              type="password"
              id="pass"
              name="pass"
              placeholder="password"
            />
            <div className="sukmav2__login-container_right-form-button">
              <Button label="Submit" />
              <Button label="Login" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
