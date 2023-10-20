import "./App.css";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";
import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // to set the value to dolist
  // useState is used to pass initial state to the function and it returns a variable with current state and value
  const [dolist, setdolist] = useState([]);

  // to store the value to the localhost sever
  // useEffect hook is used to fetch data from component
  useEffect(() => {
    if (dolist.length === 0) return;
    localStorage.setItem("dolist", JSON.stringify(dolist));
  }, [dolist]);

  // to set the value to the server permanently
  useEffect(() => {
    const dolist = JSON.parse(localStorage.getItem("dolist"));
    if (dolist) {
      setdolist(dolist);
    }
  }, []);

  // function to add the value to the list
  function addTask(name) {
    setdolist((prev) => {
      return [...prev, { name: name }];
    });
  }

  // Remove ToDo from list
  function removeTask(taskIndex) {
    setdolist((pre) => {
      const updatedList = pre.filter((taskInfo, index) => index !== taskIndex);
      localStorage.setItem("dolist", JSON.stringify(updatedList));
      return updatedList;
    });
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addtodolist={addTask}
              dolist={dolist}
              removeTask={removeTask}
            />
          }
        />
      </Routes>
    </Router>
  );
}

// Create a separate component for the home page
function Home({ addtodolist, dolist, removeTask }) {
  return (
    <>
      <NavBar />
      <div className="main-division">
        <div className="center-division">
          <Todo addtodolist={addtodolist} />
          {dolist.map((element, i) => (
            <TodoItem key={i} {...element} onTrash={() => removeTask(i)} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
