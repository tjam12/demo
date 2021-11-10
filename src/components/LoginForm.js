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
      <div className="topheader-yui">
        <header className="toptext-yui" style={{ color: "whitesmoke" }}>
          University Portal
        </header>
      </div>

      <div className="bodylogin-yui">
        <div className="bodyloginchild-yui">
          <img style={{ height: "130px" }} src={download} alt="logo" />
          <div>
            {error != "" ? <div className="error">{error}</div> : ""}
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="textbox-yui"
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
              <input
                className="textbox-yui"
                type="text"
                name="password"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>
            <input className="textbox-yui" type="submit" value="Sign in" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
