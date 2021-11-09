import React, { useState } from "react";
import download from "./download.png";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="topheader">
        <header className="toptext">University Portal</header>
      </div>

      <div className="bodylogin">
          <div className="bodyloginchild">
            <img style={{"height":"130px"}} src={download} alt="logo"/>
        <div>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div>
            <label htmlFor="email">Email</label>
            <input className="textbox"
              type="text"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className="textbox"
              type="text"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <input className="textbox" type="submit" value="Sign in" />
          </div>
        </div>
      
      </div>
    </form>
  );
};

export default LoginForm;
