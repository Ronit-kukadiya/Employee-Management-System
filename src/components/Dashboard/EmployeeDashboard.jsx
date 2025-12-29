import React from "react";
import Header from "../Common/Header";
import TaskList from "../Common/TaskList";
import TaskCard from "../TaskList/TaskCard";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-7 h-screen bg-[#0f0b23]">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskList data={props.data} />
      <TaskCard data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
