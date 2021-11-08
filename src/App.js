import React, {useState} from 'react'
import LoginForm from './components/LoginForm'
import Portal from './components/Portal'

function App() {
const adminUser = {
  email: "admin",
  password:"admin"
}

const [Subject, SetSubject] = useState ([{
  id: 1,
  subject: "english",
  marks: 30,
  registered:false,
  selected:false,
},
{
  id : 2,
  subject: "programming",
  marks:60,
  registered:false,
  selected:false,
},
{
  id : 3,
  subject: "mathematics",
  marks:90,
  registered:false,
  selected:false,
}])

const RegisteredSubject = [{

}]

const addTask = (task) => {
console.log(task)

SetSubject(Subject.map((Subjects) => Subjects.selected ? {
  ...Subjects, registered : !Subjects.registered, selected : !Subjects.selected
}: Subjects))

}

const [user, setUser] = useState({name:"", email:""})
const [error,setError] = useState("")

const Login = details => {
  console.log(details)

  if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in")
    setUser({
      name: details.name,
      email: details.email
    })
  }else{
    console.log("Details wrong")
    setError("Details wrong")
  }
}

const Logout = () => {
  setUser({
    name: "",
    email:""
  })
}

const toggleSelected = (id) => {
  console.log(id)
  SetSubject(Subject.map((Subjects) => Subjects.id === id? {
    ...Subjects, selected : !Subjects.selected
  }: Subjects))
}

  return (
    <div className="container">
      {(user.email != "") ? (
        <Portal Logout={Logout} Subject={Subject} onToggle={toggleSelected} onAdd={addTask}/>
      ): (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
