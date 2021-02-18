import { useRouter } from "next/router";
import Image from "next/image";
import { FacebookIcon, GoogleIcon } from "../../utils/svgs/SocialSvg";
interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
   // router
   const router = useRouter();
   return (
      <div className="w-full ">
         <form className="flex flex-col gap-6 font-text">
            <input
               className="input"
               type="email"
               name="email"
               placeholder="Email"
            />
            <input
               className="input"
               type="password"
               name="password"
               placeholder="Password"
            />
            <button type="submit" className="inputBtn">
               Login
            </button>
         </form>

         <h2 className="my-5 text-center text-gray-500 text-sm">
            or sign in with social platforms
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
