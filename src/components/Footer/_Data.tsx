import {
   Facebook,
   Gmail,
   Location,
   Payment,
   PhoneSvg,
   Return_Package,
   Shipping,
   Support,
   WhatsApp,
} from "../../utils/svgs/Svg";

export const Footer_Summary = [
   {
      icon: <Shipping />,
      title: "Fast Shipping.",
      text: "1-3 Days Delivery.",
      style: "border-r",
   },
   {
      icon: <Support />,
      title: "24/7 Support.",
      text: "Live Chat Or Call..",
      style: "border-r",
   },
   {
      icon: <Payment />,
      title: "Payment.",
      text: "Secure Payment Services.",
      style: "border-r",
   },
   {
      icon: <Return_Package />,
      title: "Easy Return.",
      text: "Hassle Free Shopping.",
      style: "",
   },
];

export const MainLinks = [
   {
      header: "HELP ZONE",
      links: [
         {
            text: "FAQ",
            to: "/",
         },
         {
            text: "Creating Account",
            to: "/",
         },
         {
            text: "Payment Guides",
            to: "/",
         },
         {
            text: "Warranty Policy",
            to: "/",
         },
      ],
   },
   {
      header: "CUSTOMER ZONE",
      links: [
         {
            text: "Account",
            to: "/",
         },
         {
            text: "Order List",
            to: "/",
         },
         {
            text: "Account Details",
            to: "/",
         },
         {
            text: "Feedback",
            to: "/",
         },
      ],
   },
   {
      header: "QUICK LINKS",
      links: [
         {
            text: "Create an Account",
            to: "/",
         },
         {
            text: "New Arrivals",
            to: "/",
         },
         {
            text: "Best Selling",
            to: "/",
         },
         {
            text: "Hot Deals",
            to: "/",
         },
      ],
   },
   {
      header: "USEFUL LINKS",
      links: [
         {
            text: "Terms & Conditions",
            to: "/",
         },
         {
            text: "Returns & Refund",
            to: "/",
         },
         {
            text: "Contact Us",
            to: "/",
         },
         {
            text: "About Us",
            to: "/",
         },
      ],
   },
];

export const Contact_Info = [
   {
      icon: <Location />,
      text: "  House 71, Road 8, DIT Project, Badda, Dhaka - 1212, Bangladesh",
   },
   {
      icon: <PhoneSvg />,
      text: "+8801686882085",
   },
   {
      icon: <Gmail />,
      text: "info.technolux.bd@gmail.com",
   },
];

// export const Social_Links = [
//    {
//       icon: <Facebook />,
//       to: "",
//    },
//    { icon: <WhatsApp />, to: "" },
// ];
