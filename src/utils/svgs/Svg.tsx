export const Phone = ({ height, width }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 20 20"
         fill="currentColor"
         height={height}
         width={width}
      >
         <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
   );
};

export const FB = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="17"
         height="17"
         viewBox="0 0 24 24"
         fill="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-facebook"
      >
         <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
   );
};

export const Mail = () => {
   return (
      <svg
         width="17"
         height="17"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 20 20"
         fill="currentColor"
      >
         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
   );
};

export const Menu = (props) => {
   return (
      <svg
         width="30"
         height="30"
         className="cursor-pointer transition-all duration-300 motion-safe:animate-spin"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeWidth={2}
            strokeLinejoin="round"
            d={props.strokes}
         />
      </svg>
   );
};

export const Search = ({ searchBarFocus, height }) => {
   return (
      <svg
         className={`${
            searchBarFocus && "text-lightBlue "
         } transition-all duration-300`}
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         width={height}
         height={height}
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
         />
      </svg>
   );
};

export const Cart = () => {
   return (
      <svg
         width="30"
         height="30"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
         />
      </svg>
   );
};

export const Cross = () => {
   return (
      <svg
         className="text-gray-500 cursor-pointer hover:text-darkBlue"
         width="30"
         height="30"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
         />
      </svg>
   );
};

export const Box = () => {
   return (
      <svg
         width="33"
         height="33"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
         />
      </svg>
   );
};

export const Plus = () => {
   return (
      <svg
         className="cursor-pointer hover:text-darkBlue"
         width="30"
         height="30"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
         />
      </svg>
   );
};

export const Minus = () => {
   return (
      <svg
         className="cursor-pointer hover:text-darkBlue"
         width="30"
         height="30"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
         />
      </svg>
   );
};

export const User = () => {
   return (
      <svg
         width="30"
         height="30"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
         />
      </svg>
   );
};

export const Lignting_bolt = ({ position }) => {
   return (
      <svg
         width={position}
         height={position}
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
         />
      </svg>
   );
};

export const Fire = () => {
   return (
      <svg
         width="20"
         height="20"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
         />
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
         />
      </svg>
   );
};

export const LogOut = () => {
   return (
      <svg
         width="30"
         height="30"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
         />
      </svg>
   );
};

export const Home = () => {
   return (
      <svg
         width="20"
         height="20"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
         />
      </svg>
   );
};

export const CartBag = () => {
   return (
      <svg
         width="20"
         height="20"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
         />
      </svg>
   );
};

export const Messenger = () => {
   return (
      <svg
         width="20"
         height="20"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
         />
      </svg>
   );
};

export const Account = () => {
   return (
      <svg
         width="20"
         height="20"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
         />
      </svg>
   );
};

export const RightArrowPointer = () => {
   return (
      <svg
         width="16"
         height="16"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 20 20"
         fill="currentColor"
      >
         <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
         />
      </svg>
   );
};
