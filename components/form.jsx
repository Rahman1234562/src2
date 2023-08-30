import Link from "next/link";
import { useRef } from "react";

export const Form = ({ signIn, onSubmitForm }) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        onSubmitForm(email, password);
    }
  return (
    <div className="w-1/2 h-[70vh] flex justify-center items-center ml-72">
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-5 py-10 border  shadow-md rounded-md">
        <label className="w-1/2">
          Email:
          <br />
          <input 
          ref={emailRef}
          type="email"
           placeholder="Enter your email" 
           className="w-full px-6 h-10 bg-white shadow-md rounded"
            />
        </label>
        <label className="w-1/2">
          Password:
          <br />
          <input
          ref={passwordRef}
            type="password"
            placeholder="Enter your password"
            className="w-full py-6 h-10 bg-white shadow-md rounded"
          />
        </label>
        {signIn ? (
          <p>
            don't have an account?
            <Link className="font-bold text-[#0382c3] mx-2"
             href={"/auth/signup"}>Signup</Link>
          </p>
        ) : (
          <p>
            already have an account
            <Link className="font-bold text-[#0382c3] mx-2"
             href={"/auth/signin"}>Signin</Link>
          </p>
        )}
        <input
          type="submit"
          value={signIn ? "signin" : "signup"}
          className="w-1/3 py-2 rounded text-bold bg-purple-600 cursor-pointer"
        />
      </form>
    </div>
  );
};
