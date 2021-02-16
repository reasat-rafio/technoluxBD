export const Phone = ({ height, width }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 20 20"
         fill="currentColor"
         height={`${height ? height : "20"}`}
         width={`${width ? width : "20"}`}
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

export const Menu = () => {
   return (
      <svg
         className="cursor-pointer "
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 20 20"
         fill="currentColor"
         width="27"
         height="27"
      >
         <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
         />
      </svg>
   );
};

export const Search = ({ searchBarFocus }) => {
   return (
      <svg
         className={`${
            searchBarFocus && "text-lightBlue "
         } transition-all duration-300`}
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         width="30"
         height="30"
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
         viewBox="0 0 20 20"
         fill="currentColor"
      >
         <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
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

export const Lignting_bolt = () => {
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
