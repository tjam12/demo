const Portal = ({ Logout, Subject, onToggle, onAdd }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    onAdd("a");
  };

  return (
    <div>
      <header>Student Portal</header>
      <button onClick={Logout}>Logout</button>
      <div className="container">
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

        <div className="Bottom">
          <button className="btn btn-block" onClick={onSubmit}>
            Register
          </button>
        </div>
      </div>

      <div className="container">
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
        
        <div className="Bottom">
          <button className="btn btn-block" onClick={onSubmit}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portal;
