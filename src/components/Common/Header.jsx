import { React, useState } from "react";
import { LogOut } from "lucide-react";
import { SetLocalStorage } from "../../utils/LocalStorage";
const Header = (props) => {
  // const [username, setusername] = useState("");

  // if (!data) {
  //   setusername("admin");
  // } else {
  //   setusername(data.name);
  // }

  const logoutUser = () => {
    localStorage.setItem("loggedinUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-start justify-between flex-row">
      <h1 className="text-white">
        Hello, <br />
        <span className="font-semibold text-2xl">username</span>
      </h1>
      <button
        onClick={() => {
          logoutUser();
        }}
        className="flex gap-2 items-center bg-red-600 text-white py-1 px-3 rounded-2xl outline-none outline-red-950 hover:-translate-y-0.5 hover:border-b-4 hover:drop-shadow-[1px_1px_7px_#ff0e0e] hover:border-red-400 active:border-0 active:translate-y-0.5"
      >
        LogOut
        <LogOut />
      </button>
    </div>
  );
};

export default Header;
