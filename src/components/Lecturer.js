import React, { useState } from "react";
const Lecturer = ({
  Logout,
  Students,
  Subject,
  onToggle,
  onAdd,
  listSubject,
}) => {
  const [displaySbj, setSbj] = useState();
  const [displayMark, setMark] = useState();
  const [displaysingleStud, setsingleStud] = useState();
  const [displayStud, setStud] = useState([]);

  let regStud = [];
  let selStud = "";
  let defaultname = ["Name:","Status:"];

  const submitHandler = (e) => {
    console.log("Mark", displayMark);
    console.log("Student", displaysingleStud);
    console.log("Subject", displaySbj);
    onAdd(displaysingleStud, displayMark);
  };

  const onClickStud = (student) => {
    let prevlistSubject = [];

    /*{Subject.map((Subject)=>Subject.selected ? onAdd(Subject.subject):'')}*/

    setsingleStud(student);
    selStud = student;
    console.log(selStud);
  };

  const selSubset = (value) => {
    console.log(value);
    setSbj(value);
    const test = Students.filter(
      (item) =>
        !Subject.find(({ subject }) => item.subjects === subject) && item.name
    );

    const test2 = test.filter((item) => item.subjects.includes(value));

    console.log("loop1", regStud[1]);

    {
      test2.map((setregStud) => {
        regStud.push(setregStud.name);
        console.log("loop1.5", setregStud.name);
      });
    }

    // console.log("loop2", test2[1].name)
    //console.log("loop3", regStud[1])

    setStud(regStud);
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
        <h1 className="lecttext-hepy">Lecturer Portal</h1>
        <button className="btn-hepy" onClick={Logout}>
          Logout
        </button>
      </div>

      <div className="leftmenu-hepy">
        <h3 style={{ textAlign: "center" }}>Subjects</h3>
        <div className="subjectlistborder">
          <hr />
          <form>
            {Subject.map((subjects) => (
              <p>
                <label>
                  <>
                    <input
                      type="radio"
                      name="subject"
                      value={subjects.subject}
                      name="radiovalues"
                      onChange={(e) => selSubset(e.target.value)}
                    />
                  </>
                  {subjects.subject}
                </label>
              </p>
            ))}
          </form>
        </div>
      </div>

      <div className="rightmenu-hepy">
      <h3 style={{ textAlign: "center" }}>Student Name</h3>
          <hr />
          <form>
            {displayStud.map((student) => (
              <p>
                <label>
                  <>
                    <input
                      type="radio"
                      name="student"
                      value={student}
                      name="radiovalues"
                      onChange={(e) => onClickStud(e.target.value)}
                    />
                  </>
                  {student}
                </label>
              </p>
            ))}
          </form>

          <keyinmark>
            <div className="keyintable-hepy">
              <div>
                <input type="text" onChange={(e) => setMark(e.target.value)} />
              </div>
            </div>
          </keyinmark>
      </div>

      <div className="bottommenuleft-hepy">
      <div className="bottomsbmt-hepy"></div>
        <button className="btn-hepy" onClick={(e) => submitHandler()} style={{ background: "whitesmoke", color: "black" }}>
          Submit
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Lecturer;
