import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Portal from "./components/Portal";
import Lecturer from "./components/Lecturer";

function App() {
  const adminUser = {
    email: "admin",
    password: "admin",
  };

  useEffect(() => {
    const getSubjects = async () => {
      const subjectsFromServer = await fetchSubjects();
      SetSubject(subjectsFromServer);
    };

    const getEmails = async () => {
      const emailsFromServer = await fetchEmails();
      SetEmails(emailsFromServer);
    };

    const getStudents = async () => {
      const studentsFromServer = await fetchStudents();
      setUpdSubject(studentsFromServer);
    };

    const getallStudents = async () => {
      const allstudentsFromServer = await fetchallStudents();
      SetStudents(allstudentsFromServer);
    };

    getSubjects();
    getEmails();
    getStudents();
    getallStudents();
  }, []);

  const fetchSubjects = async () => {
    const res = await fetch("http://localhost:5000/subjects");
    const data = await res.json();

    console.log(data);
    return data;
  };

  const fetchEmails = async () => {
    const res = await fetch("http://localhost:5000/emails");
    const data = await res.json();

    console.log(data);
    return data;
  };

  const fetchStudents = async (id) => {
    const res = await fetch(`http://localhost:5000/students/${id}`);
    const data = await res.json();

    console.log(data);
    return data;
  };

  const fetchallStudents = async () => {
    const res = await fetch(`http://localhost:5000/students/`);
    const data = await res.json();

    console.log(data);
    return data;
  };

  const [Subject, SetSubject] = useState([]);
  const [Students, SetStudents] = useState([]);
  const [Emails, SetEmails] = useState([]);
  const [updSubject, setUpdSubject] = useState([]);

  const addTask = async (task) => {
    console.log(task);

    const updateSubject = await fetchStudents(user.email);
    const updTask = { ...updateSubject, subjects: task };

    const res = await fetch(`http://localhost:5000/students/${user.email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    console.log({ updSubject });
    SetSubject(
      Subject.map((Subjects) =>
        Subjects.selected
          ? {
              ...Subjects,
              registered: !Subjects.registered,
              selected: !Subjects.selected,
            }
          : Subjects
      )
    );
  };

  const [user, setUser] = useState({ name: "", email: "", type: "" });
  const [error, setError] = useState("");
  const listSubject = [];

  const Login = (details) => {
    console.log(details);

    {
      Emails.map((Emails) =>
        details.email == Emails.email
          ? setUser({
              name: details.name,
              email: details.email,
              type: Emails.type,
            })
          : setError("Details wrong")
      );
    }
  };

  const Logout = () => {
    setUser({
      name: "",
      email: "",
    });
  };

  const toggleSelected = (id) => {
    console.log(id);
    SetSubject(
      Subject.map((Subjects) =>
        Subjects.id === id
          ? {
              ...Subjects,
              selected: !Subjects.selected,
            }
          : Subjects
      )
    );
  };

  return (
    <div className="container">
      {user.email != "" && user.type === "student" ? (
        <Portal
          Logout={Logout}
          Subject={Subject}
          onToggle={toggleSelected}
          onAdd={addTask}
          listSubject={listSubject}
        />
      ) : user.email != "" && user.type === "lecturer" ? (
        <Lecturer
          Logout={Logout}
          Students={Students}
          Subject={Subject}
          onToggle={toggleSelected}
          onAdd={addTask}
          listSubject={listSubject}
        />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
