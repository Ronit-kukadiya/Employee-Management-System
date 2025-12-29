import React from "react";
import Header from "../Common/Header";
import CreateTask from "../Common/CrateTask";
import AllTasks from "../Common/AllTasks";
//  bg-[#0f0b23]
const AdminDashboard = (props) => {
  return (
    <div className="h-full w-full p-7 bg-[#080f13]">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
