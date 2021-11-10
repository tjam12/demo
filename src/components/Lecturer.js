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
  const [displayStud, setStud] = useState([])

  let regStud = []
  let selStud = ''
  let selSub =''

  const submitHandler = (e) => {
    console.log("Mark", displayMark)
    console.log("Student", displaysingleStud)
    console.log("Subject", displaySbj)
    onAdd(displaysingleStud,displayMark)
  };

  const onClickStud = (student) => {
    let prevlistSubject=[];

    /*{Subject.map((Subject)=>Subject.selected ? onAdd(Subject.subject):'')}*/
    
   setsingleStud(student)
    selStud=student
    console.log(selStud)
  };


  const selSubset = (value) => {
        console.log(value)
        setSbj(value)
        const test = Students.filter((item) => !Subject.find(({subject}) => item.subjects === subject) && item.name);

    const test2 = test.filter((item) => item.subjects.includes(value))
    
    console.log("loop1",regStud[1])

    {test2.map((setregStud)=>{
      regStud.push(setregStud.name)
      console.log("loop1.5",setregStud.name)
    })}


    
   // console.log("loop2", test2[1].name)
    //console.log("loop3", regStud[1])

    setStud(regStud)
  }

  return (
    <div>
      <div className="topheader">
        <h1 className="headertext">Lecturer Portal</h1>
        <button className="btn" onClick={Logout}>
          Logout
        </button>
      </div>

      <div className="leftmenu">
        <h2 className="subjectborder">Subjects</h2>
        <div className="subjectlistborder">
          <p></p>
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
                    onChange={e => selSubset(e.target.value)}
                    
                  />
                </>
                {subjects.subject}
              </label>
            </p>
            
          ))}
          </form>
          
        </div>
      </div>

      <div className="rightmenu">
      <h2 className="studentnameborder">Student Name</h2>
      <div className="studnamelistborder">
     
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
      <div className="keyintable">
          
                  <div> 
                   <input type="text" onChange={(e) => setMark(e.target.value)} />
                   </div> 
               
       </div>
      </keyinmark>
      </div>
    </div>

      <div className="bottommenuleft">
        <button className="btn" onClick={(e)=>submitHandler()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Lecturer;
