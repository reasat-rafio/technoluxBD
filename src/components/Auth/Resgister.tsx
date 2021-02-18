import Image from "next/image";
import { FacebookIcon, GoogleIcon } from "../../utils/svgs/SocialSvg";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../utils/yupSchema";
import axios from "axios";
import getConfig from "next/config";
import { Notify } from "../../utils/Toast";

interface ResgisterProps {}

interface onSubmitInterface {
   first_name: string;
   last_name: string;
   email: string;
   password: string;
   con_password: string;
}

export const Resgister: React.FC<ResgisterProps> = ({}) => {
   // router
   const router = useRouter();
   // Server URL
   const { publicRuntimeConfig } = getConfig();

   // Setting up Yup as useFrom resolver
   const { handleSubmit, register, errors } = useForm({
      mode: "onBlur",
      resolver: yupResolver(RegisterSchema),
   });

   // Form on submit
   const onSubmitAction = async ({
      first_name,
      last_name,
      email,
      password,
      con_password,
   }: onSubmitInterface) => {
      try {
         const { data } = await axios.post(
            `${publicRuntimeConfig.API_URL}/auth/local/register`,
            {
               username: `${first_name} ${last_name}`,
               email,
               password,
            }
         );
         Notify("success", "registration done!");
      } catch (error) {
         Notify(
            "error",
            `${error.response.data.message[0].messages[0].message}`
         );
         console.log(error.response.data.message);
      }
      console.log(first_name, last_name, email, password, con_password);
   };

   return (
      <div className="w-full">
         <form
            className="flex flex-col gap-6 font-text"
            onSubmit={handleSubmit(onSubmitAction)}
         >
            <div className="flex justify-center items-center gap-2">
               <input
                  className="input w-1/2"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  ref={register}
               />

               <input
                  className="input  w-1/2"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  ref={register}
               />
            </div>
            {errors.first_name && (
               <span className="text-xs text-red-600 my-0">
                  {errors.first_name.message}
               </span>
            )}
            {errors.last_name && (
               <span className="text-xs text-red-600 my-0">
                  {errors.last_name.message}
               </span>
            )}
            <input
               className="input"
               type="email"
               name="email"
               placeholder="Email"
               ref={register}
            />
            {errors.email && (
               <span className="text-xs text-red-600 my-0">
                  {errors.email.message}
               </span>
            )}
            <input
               className="input"
               type="password"
               name="password"
               placeholder="Password"
               ref={register}
            />
            {errors.password && (
               <span className="text-xs text-red-600 my-0">
                  {errors.password.message}
               </span>
            )}
            <input
               className="input"
               type="password"
               name="con_password"
               placeholder="Confirm Password"
               ref={register}
            />
            {errors.con_password && (
               <span className="text-xs text-red-600 my-0">
                  {errors.con_password.message}
               </span>
            )}
            <button type="submit" className="inputBtn">
               Login
            </button>
         </form>

         <h2 className="my-5 text-center text-gray-500 text-sm">
            or login in with social platforms
         </h2>

         <div className="w-96 gap-3 flex justify-center items-center my-5 cursor-pointer ">
            <span className="socialIcons">
               <Image
                  src={FacebookIcon}
                  height="40"
                  width="40"
                  layout="intrinsic"
               />
            </span>
            <span className="socialIcons">
               <Image
                  src={GoogleIcon}
                  height="40"
                  width="40"
                  layout="intrinsic"
               />
            </span>
         </div>
         <div className="w-96  flex">
            <button
               onClick={() => router.push("/")}
               className="m-auto text-darkBlue px-5 py-1 font-semibold "
            >
               CLOSE
            </button>
         </div>
      </div>
   );
};
