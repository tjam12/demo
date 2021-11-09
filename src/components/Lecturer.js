import React, { useState } from "react";

const Lecturer = ({ Logout,
  Students,
  Subject,
  onToggle,
  onAdd,
  listSubject,
}) => {
  let subjects = ["Mathematics", "Java", "HCI"];
  let defaultname = ["Name:","Status:"];
  const [displaySbj, setSbj] = useState();
  const [, setMark] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    setMark(Students);
  };
  return (
    <div>
      <div className="mainmenu-hepy">
        <div className="profileborder-hepy">
          <h2 style={{ padding: "20px 20px", color: "black", 
          textAlign: "center" }}>Profile</h2>
          {defaultname.map((result) => ( 
            <p>
              <label>
                <>
                </>
                {result}
              </label>
            </p>
          ))}
        </div>
        <div className="topheader-hepy">
          <header className="lecttext-hepy">Lecturer Portal</header>
          <button className="btn-hepy" onClick={Logout}>Logout</button>
        </div>
        <div className="leftmenu-hepy">
          <h3 style={{ textAlign: "center" }}>Subjects</h3>
          <hr />
          {Students.map((students) => (
            <h4>{students.names}</h4>
          ))}
        </div>
        <div className="rightmenu-hepy">
          <h3 style={{ textAlign: "center" }}>Student Name</h3>
          <hr />
          <p>{displaySbj}</p>
          {subjects.map((result) => (
            <p>
              <label>
                <>
                  <input
                    type="radio"
                    value={result}
                    name="radiovalues"
                    onChange={(e) => setSbj(e.target.value)}
                  />
                </>
                {result}
              </label>
            </p>
          ))}
          <keyinmark onSubmit={submitHandler}>
            <div className="keyintable-hepy">
              {Students.map((students) => (
                <p>
                  <label>
                    <>
                      <div>
                        <input type="text" onChange={<h4>{students.marks}</h4>} />
                      </div>
                    </>
                  </label>
                </p>
              ))}
            </div>
          </keyinmark>
        </div>
      </div>
      <div className="submainmenu-hepy">
        <div className="bottomsbmt-hepy"></div>
        <button className="btn-hepy" onClick={Logout} style={{ background: "whitesmoke", color: "black" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Lecturer;