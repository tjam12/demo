const Portal = ({ Logout, Subject, onToggle, onAdd, listSubject }) => {
  const onAddSubj = (e) => {
    let prevlistSubject=[];

    /*{Subject.map((Subject)=>Subject.selected ? onAdd(Subject.subject):'')}*/
    {Subject.map((Subject)=>Subject.selected&&!Subject.registered ? listSubject.push(Subject.subject):'')}

    onAdd(listSubject)
  };

  const onDelSubj = (e) => {
    

    /*{Subject.map((Subject)=>Subject.selected ? onAdd(Subject.subject):'')}*/
    {Subject.map((Subject)=>!Subject.selected&&Subject.registered ? listSubject.push(Subject.subject):'')}

    onAdd(listSubject)
  };

  return (
    <div>
      
      <div className="topheader">
      <header className="toptext">Student Portal</header>
      <button className="topright" onClick={Logout}>Logout</button>
      </div>
     

      <div className="leftmenu">
        <h1 className="subjectregister">Subjects offered</h1>

        {Subject.map(
          (Subject) =>
            !Subject.registered && (
              <div
                className={`task ${Subject.selected ? "reminder" : ""}`}
                onClick={() => onToggle(Subject.id)}
              >
                <h3 key={Subject.id}>{Subject.subject}</h3>
              </div>
            )
        )}

        <div className="bottomright">
          <button className="btn btn-block" onClick={onAddSubj} >
            Register
          </button>
        </div>
      </div>

      <div className="rightmenu">
        <h1 className="subjectregister">Registered subject</h1>
        
        <div className='tableleft'>
        {Subject.map(
          (Subject) =>
            Subject.registered && (
              <div
                className={`task ${Subject.selected ? "reminder" : ""}`}
                onClick={() => onToggle(Subject.id)}
              >
                <h3 key={Subject.id}>{Subject.subject}</h3>
              </div>
            )
        )}
        </div>

        <div className='tableright'>
        {Subject.map(
          (Subject) =>
            Subject.registered && (
              <div className={`taskcolorless`}>
                <h3 key={Subject.id}>{Subject.marks}</h3>
                </div>
            )
        )}
        </div>
        
        <div className="bottomright">
          <button className="btn btn-block" onClick={onDelSubj}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portal;
