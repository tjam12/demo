import React from 'react'

const Lecturer = ({ Logout, Students, Subject, onToggle, onAdd, listSubject }) => {
  if(Students.length>0){
    
    const test = Students.filter((item) => !Subject.find(({subject}) => item.subjects === subject) && item.name);

    const test2 = test.filter((item) => item.subjects.includes("english"))

    /*if (test2.length>0){
      let a = []
      a.push()

    }*/

    //test2.map??
    //for(let i=0;i<Students.length;i++){
      //test.push(Students[i])

      Subject.map((items)=>(<button name={items.subject}/>))


      console.log("loop", test)
      console.log("loop2", test2[1].name)

    //}
  }
  
  
  return (
        <div>
            <header>Lecturer Portal</header>
      <button onClick="javascript">Javascript</button>
            {Students.map((Students) =>
              <div>
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
        </div>
    )
}

export default Lecturer

