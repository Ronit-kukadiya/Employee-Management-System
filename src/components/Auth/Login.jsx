import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const FormSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, Password);
    setEmail("");
    setPassword("");
  };

  const EmailInput = (e) => {
    setEmail(e.target.value);
  };
  const PasswordInput = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#0f0b23]">
      <div className="border-2 border-blue-300 rounded-2xl p-16">
        <form
          onSubmit={(e) => {
            FormSubmit(e);
          }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="flex flex-row">
            <h1 className="text-white text-4xl mb-5 font-bold font-sans underline decoration-blue-500">
              Log
            </h1>
            <h1 className="text-blue-500 text-4xl mb-5 font-bold font-sans underline decoration-blue-500">
              in
            </h1>
          </div>
          <input
            onChange={(e) => {
              EmailInput(e);
            }}
            value={email}
            required
            className="bg-white text-black  py-2 px-6 border-2 rounded-3xl outline-none placeholder:text-gray-400"
            type="email"
            placeholder="Email Address"
          />
          <input
            onChange={(e) => {
              PasswordInput(e);
            }}
            value={Password}
            required
            className="bg-white text-black  py-2 px-6 border-2 rounded-3xl outline-none placeholder:text-gray-400"
            type="password"
            placeholder="Password"
          />
          <button className="py-2 mt-5 w-full text-white bg-blue-600 rounded-3xl outline-none outline-blue-950 hover:-translate-y-0.5 hover:drop-shadow-[1px_1px_7px_#3b99f7] active:translate-y-0.5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
