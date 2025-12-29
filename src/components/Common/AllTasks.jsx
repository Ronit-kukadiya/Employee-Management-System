import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userdata, setuserdata] = useContext(AuthContext);

  return (
    <div className="p-5 mt-5 rounded-2xl bg-[#0f0b23]">
      <div className="text-white flex justify-between mb-2 px-4 py-2 rounded-2xl bg-blue-950">
        <h3 className="text-lg font-medium w-1/5 ">Name</h3>
        <h3 className="text-lg font-medium w-1/5 ">New Tasks</h3>
        <h3 className="text-lg font-medium w-1/5 ">Active Tasks</h3>
        <h3 className="text-lg font-medium w-1/5 ">Completed Tasks</h3>
        <h3 className="text-lg font-medium w-1/5 ">failed Tasks</h3>
      </div>
      <div className=" ">
        {userdata.map((elem, id) => {
          return (
            <div
              key={id}
              className=" flex justify-between mb-2 px-4 py-2 rounded-2xl bg-cyan-950"
            >
              <h3 className="text-white text-lg font-medium w-1/5">
                {elem.name}
              </h3>
              <h3 className="text-blue-100 text-lg font-medium w-1/5">
                {elem.taskCounts.newTask}
              </h3>
              <h3 className="text-green-200 text-lg font-medium w-1/5">
                {elem.taskCounts.active}
              </h3>
              <h3 className="text-amber-200 text-lg font-medium w-1/5">
                {elem.taskCounts.completed}
              </h3>
              <h3 className="text-red-300 text-lg font-medium w-1/5">
                {elem.taskCounts.failed}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
