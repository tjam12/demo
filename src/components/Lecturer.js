import React from 'react'

const Lecturer = ({ Logout, Students, Subject, onToggle, onAdd, listSubject }) => {
    return (
        <div>
            <header>Lecturer Portal</header>
      <button style='display:inline-block' onClick={Logout}>Logout</button>
            {Students.map((Students) =>
            
              <div
              >
                <h3 key={Students.id}>{Students.name}</h3>
              </div>
            
        )}
        
{Students.map((Students) =>Students.name === 'Ali' && (
            <div>
        {Students.subjects.map(subjects => 
          <h3>{subjects}</h3>
        )}
            </div>)
      )}
      <p>HEADER</p>
        </div>
    )
}

export default Lecturer

