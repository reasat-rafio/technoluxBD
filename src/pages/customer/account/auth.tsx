import React, { useState } from "react";
import { useRouter } from "next/router";
import { Login } from "../../../components/Auth/Login";
import { Resgister } from "../../../components/Auth/Resgister";
import "react-toastify/dist/ReactToastify.css";

interface authProps {}
// toast.configure();
const auth: React.FC<authProps> = ({}) => {
   // state for outputing login || register section
   const [auth, setAuth] = useState<string>("login");

   // router
   const router = useRouter();

   return (
      <main className="flex justify-center items-center h-screen">
         <div className=" w-96">
            <section className="flex gap-10 py-5 justify-center items-center ">
               <h1
                  onClick={() => setAuth("login")}
                  className={`font-text text-2xl cursor-pointer text-gray-500 ${
                     auth === "login" && "text-darkBlue"
                  }`}
               >
                  Login
               </h1>
               <h2
                  onClick={() => setAuth("register")}
                  className={`font-text text-2xl cursor-pointer text-gray-500 ${
                     auth === "register" && "text-darkBlue"
                  }`}
               >
                  Register
               </h2>
            </section>
            <section className=" px-6">
               {/* login */}
               {auth === "login" && <Login />}
               {/* register */}
               {auth === "register" && <Resgister />}
            </section>
         </div>
      </main>
   );
};

export default auth;
