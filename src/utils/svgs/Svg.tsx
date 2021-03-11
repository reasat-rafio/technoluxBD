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

export const SearchSm = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         width={"18"}
         height={"18"}
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
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width="30"
         height="30"
      >
         <path fill="none" d="M0 0h24v24H0z" />
         <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </svg>
   );
};

export const EmptyCart = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="120"
         height="120"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="#d3d3d3"
         fill="none"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
         <circle cx="6" cy="19" r="2" />
         <circle cx="17" cy="19" r="2" />
         <path d="M17 17h-11v-14h-2" />
         <path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13" />
         <path d="M17 3l4 4" />
         <path d="M21 3l-4 4" />
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

export const SmCross = () => {
   return (
      <svg
         className="text-gray-500 cursor-pointer hover:text-darkBlue"
         width="15"
         height="15"
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

export const MdCross = () => {
   return (
      <svg
         className="text-gray-500 cursor-pointer hover:text-darkBlue"
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

export const DownArrowSm = () => {
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
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
         />
      </svg>
   );
};

export const UpArrowSm = () => {
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
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
         />
      </svg>
   );
};

export const Details = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         // style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"
      >
         <path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V5h16 l0.002,14H4z"></path>
         <path d="M6 7H18V9H6zM6 11H18V13H6zM6 15H12V17H6z"></path>
      </svg>
   );
};

export const Return = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         // style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"
      >
         <path d="M6.758 8.758L5.344 7.344C4.537 8.15 3.9 9.139 3.503 10.203l1.873.701C5.675 10.105 6.152 9.363 6.758 8.758zM19 12.999c0-2.138-.832-4.146-2.344-5.655C15.385 6.07 13.758 5.287 12 5.069V2L7 6l5 4V7.089c1.222.204 2.349.775 3.242 1.669C16.376 9.891 17 11.397 17 13c0 .001 0 .002 0 .002 0 .33-.033.655-.086.977-.007.043-.011.088-.019.131-.058.307-.142.606-.247.902-.208.585-.506 1.135-.891 1.634-.16.209-.331.412-.516.597-.183.183-.379.349-.583.506-.048.037-.096.072-.145.107-.193.141-.393.271-.601.388-.523.292-1.086.504-1.676.627-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027-.633.064-1.28.031-1.898-.103l-.424 1.955C9.857 20.939 10.429 21 11 21c.28 0 .559-.016.834-.045.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098.018-.004.035-.005.053-.009l-.001-.005c.749-.161 1.467-.428 2.136-.795l.001.001c.01-.006.019-.013.028-.019.284-.157.557-.337.821-.529.064-.046.127-.093.189-.141.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081L17.4 17.785c.462-.614.828-1.285 1.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753C19 13.005 19 13.003 19 12.999L19 12.999C19 12.999 19 12.999 19 12.999L19 12.999zM6.197 16.597l-1.6 1.201c.229.305.48.594.746.858.541.541 1.155 1.001 1.823 1.367l.961-1.754c-.502-.275-.963-.62-1.371-1.029C6.557 17.042 6.369 16.825 6.197 16.597zM5 13c0-.145.005-.287.015-.429l-1.994-.143C3.007 12.617 3 12.807 3 13c0 .964.17 1.905.504 2.8l1.873-.701C5.127 14.43 5 13.724 5 13z"></path>
      </svg>
   );
};

export const Process = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         // style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"
      >
         <path d="M19,3h-2.25c0-0.553-0.447-1-1-1h-7.5c-0.553,0-1,0.447-1,1H5C3.897,3,3,3.897,3,5v15c0,1.103,0.897,2,2,2h14 c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M19,20H5V5h2v2h10V5h2V20z"></path>
      </svg>
   );
};

export const Star = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         style={{ fill: "rgba(0, 0, 0, 1)", transform: "scaleX(-1)" }}
      >
         <path d="M6.516,14.323l-1.49,6.452c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22 c0.193,0,0.387-0.056,0.555-0.168L12,18.202l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082 l-1.829-6.4l4.536-4.082c0.297-0.268,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.644-0.868-0.676L15.378,8.05l-2.467-5.461 C12.75,2.23,12.393,2,12,2s-0.75,0.23-0.911,0.589L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16 c-0.134,0.369-0.038,0.782,0.242,1.056L6.516,14.323z M9.369,9.997c0.363-0.029,0.683-0.253,0.832-0.586L12,5.43l1.799,3.981 c0.149,0.333,0.469,0.557,0.832,0.586l3.972,0.315l-3.271,2.944c-0.284,0.256-0.397,0.65-0.293,1.018l1.253,4.385l-3.736-2.491 c-0.336-0.225-0.773-0.225-1.109,0l-3.904,2.603l1.05-4.546c0.078-0.34-0.026-0.697-0.276-0.94l-3.038-2.962L9.369,9.997z"></path>
      </svg>
   );
};

export const GoBack = () => {
   return (
      <svg
         className="transform translate-x-4 cursor-pointer"
         xmlns="http://www.w3.org/2000/svg"
         width="35"
         height="35"
         viewBox="0 0 24 24"
      >
         <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
      </svg>
   );
};
