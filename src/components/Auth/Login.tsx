import { useRouter } from "next/router";
import Image from "next/image";
import { FacebookIcon, GoogleIcon } from "../../utils/svgs/SocialSvg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../utils/yupSchema";
import axios from "axios";
import getConfig from "next/config";
import { Notify } from "../../utils/Toast";
import { useCtx } from "../../store";
import { loginUserAction } from "../../store/actions/userAction";
// import { useCookies } from "react-cookie";
import { signIn, signOut, useSession } from "next-auth/client";

interface LoginProps {}
interface onSubmitInterface {
   identifier: string;
   password: string;
}

export const Login: React.FC<LoginProps> = ({}) => {
   // router
   const router = useRouter();
   // Server URL
   const { publicRuntimeConfig } = getConfig();

   // store
   const { userState, userDispatch } = useCtx();

   // // Cookies
   // const [cookies, setCookie] = useCookies(["userjwt"]);

   //   setting up yup as useForm resolver
   const { handleSubmit, register, errors } = useForm({
      mode: "onBlur",
      resolver: yupResolver(LoginSchema),
   });

   // form on submit
   const onSubmitAction = async ({
      identifier,
      password,
   }: onSubmitInterface) => {
      try {
         const { data } = await axios.post(`http://localhost:1337/auth/local`, {
            identifier,
            password,
         });

         // Setting the jwt to cookies
         // setCookie("userjwt", data.jwt, { path: "/" });
         //  User Global Dispatch
         userDispatch(loginUserAction(data));
         // toast
         Notify("success", `welcome back ${data.user.username}  !`);
      } catch (error) {
         Notify(
            "error",
            `${error.response.data.message[0].messages[0].message}`
         );
         console.log(error);
      }
   };

   // Social loguin action

   const socialLoginAction = async (platform: string) => {
      try {
         await signIn(platform);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="w-full ">
         <form
            className="flex flex-col gap-6 font-text"
            onSubmit={handleSubmit(onSubmitAction)}
         >
            <input
               className="input"
               type="email"
               name="identifier"
               placeholder="Email"
               ref={register}
            />
            {errors.identifier && (
               <span className="text-xs text-red-600 my-0">
                  {errors.identifier.message}
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
            <button type="submit" className="inputBtn">
               Login
            </button>
         </form>

         <h2 className="my-5 text-center text-gray-500 text-sm">
            or sign in with social platforms
         </h2>

         <div className="w-96 gap-3 flex justify-center items-center my-5 cursor-pointer ">
            <span
               className="socialIcons"
               onClick={() => {
                  socialLoginAction("facebook");
               }}
            >
               <Image
                  src={FacebookIcon}
                  height="40"
                  width="40"
                  layout="intrinsic"
               />
            </span>
            <span
               className="socialIcons"
               onClick={async () => socialLoginAction("google")}
            >
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
