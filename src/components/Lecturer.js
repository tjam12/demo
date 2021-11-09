import React, { useState } from "react";

const Lecturer = ({ Logout,
  Students,
  Subject,
  onToggle,
  onAdd,
  listSubject,
}) => {
  let subjects = ["Mathematics", "Java", "HCI"];
  const [displaySbj, setSbj] = useState();
  const [, setMark] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    setMark(Students);
  };

  return (
    <div>
      <div className="topheader">
        <h1 className="headertext">Lecturer Portal</h1>
        <button className="btn" onClick={Logout}>Logout</button>
      </div>

        <div className="leftmenu">
          <h2 className="subjectborder">Subjects</h2>
          <div className="subjectlistborder">
          {Students.map((students) => (
            
            <h4>{students.names}</h4>

          ))}
          </div>
        </div>
  

      <div className="rightmenu">
        <h2 className="studentnameborder">Student Name</h2>
        <div className="studnamelistborder">
        {displaySbj}
        
        
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
        <div className="keyintable">
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

      <div className="bottommenuleft">
        <button className="btn" onClick={Logout}>
          Submit
        </button>
      </div>
      
    </div>
  );
};

export default Lecturer;