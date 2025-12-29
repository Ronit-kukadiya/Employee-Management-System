import React from "react";

const TaskList = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="w-[45%] px-10 py-5 bg-red-400 rounded-2xl">
        <h1 className="text-white text-3xl font-semibold">
          {data.taskCounts.active}
        </h1>
        <h1 className="text-white text-lg">Active Tasks</h1>
      </div>
      <div className="w-[45%] px-10 py-5 bg-fuchsia-400 rounded-2xl">
        <h1 className="text-white text-3xl font-semibold">
          {data.taskCounts.newTask}
        </h1>
        <h1 className="text-white text-lg">New Tasks</h1>
      </div>
      <div className="w-[45%] px-10 py-5 bg-indigo-400 rounded-2xl">
        <h1 className="text-white text-3xl font-semibold">
          {data.taskCounts.completed}
        </h1>
        <h1 className="text-white text-lg">Completed Tasks</h1>
      </div>
      <div className="w-[45%] px-10 py-5 bg-sky-400 rounded-2xl">
        <h1 className="text-white text-3xl font-semibold">
          {data.taskCounts.failed}
        </h1>
        <h1 className="text-white text-lg">Failed Tasks</h1>
      </div>
    </div>
  );
};

export default TaskList;
