import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CrateTask = () => {
  const [userdata, setuserdata] = useContext(AuthContext);

  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [AssignTo, setAssignTo] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  //
  const [NewTasks, setNewTasks] = useState({});
  const SubmitHandler = (e) => {
    e.preventDefault();
    setNewTasks({
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = userdata;

    data.forEach((elem) => {
      if (AssignTo == elem.name) {
        elem.tasks.push(NewTasks);
        elem.taskCounts.newTask++;
      }
    });
    setuserdata(data);
    console.log(data);
    //
    settitle("");
    setdate("");
    setAssignTo("");
    setcategory("");
    setdescription("");
  };

  return (
    <div className="p-5 bg-[#0f0b23] mt-10 rounded border-2 border-blue-300">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-white font-medium text-sm mb-0.5">Task:</h3>
            <input
              onChange={(e) => {
                settitle(e.target.value);
              }}
              value={title}
              className="text-sm px-5 py-1 mb-4 w-4/5 rounded-2xl outline-none bg-white placeholder:text-gray-400"
              type="text"
              placeholder="Enter Task Name"
            />
          </div>
          <div>
            <h3 className="text-white text-sm mb-0.5">Date</h3>
            <input
              onChange={(e) => {
                setdate(e.target.value);
              }}
              value={date}
              className="text-sm px-5 py-1 mb-4 w-4/5 rounded-2xl outline-none bg-white placeholder:text-gray-400"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-white text-sm mb-0.5">Assign to</h3>
            <input
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              value={AssignTo}
              className="text-sm px-5 py-1 mb-4 w-4/5 rounded-2xl outline-none bg-white placeholder:text-gray-400"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-white text-sm mb-0.5">Category</h3>
            <input
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              value={category}
              className="text-sm px-5 py-1 mb-4 w-4/5 rounded-2xl outline-none bg-white placeholder:text-gray-400"
              type="text"
              placeholder="task type"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-white text-sm mb-0.5">Description:</h3>
          <textarea
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            value={description}
            className="w-full h-44 text-sm px-5 py-2 rounded-4xl outline-none bg-white caret-blue-700 placeholder:text-gray-400"
            type="text"
            placeholder="Enter Task Description"
          />
          <button className="text-white text-sm px-5 py-3 mt-4 w-full rounded-3xl bg-blue-600  outline-none outline-blue-950 hover:-translate-y-0.5 hover:border-b-4 hover:drop-shadow-[1px_1px_7px_#1d97ef] hover:border-blue-400 active:border-0 active:translate-y-0.5">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrateTask;
