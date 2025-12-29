import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex flex-col justify-between p-4 shrink-0 h-full w-[300Px] bg-blue-800 rounded-2xl">
      <div className="flex justify-between  items-center">
        <h3 className="px-3 py-1 text-white text-md font-semibold rounded-2xl bg-rose-600">
          {data.category}
        </h3>
        <h3 className="text-white">{data.date}</h3>
      </div>
      <h3 className="mt-2 text-white text-2xl font-semibold">{data.title}</h3>
      <p className="text-white text-sm mt-2">{data.description}</p>
      <div className="mt-4">
        <button className="px-2 py-1 rounded-2xl bg-blue-500 hover:bg-blue-800 active:scale-95">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
