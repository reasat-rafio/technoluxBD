export const sideBarVarients = {
   inital: {
      opacity: 0,
      x: 500,
   },
   animate: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 0.5,
         type: "tween",
      },
   },
   exit: {
      opacity: 0,
      x: 500,
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
   },
};

export const sideBarMoreVarients = {
   inital: {
      opacity: 0,
      y: -30,
   },
   animate: {
      opacity: 1,
      y: 0,
      transition: {
         type: "tween",
      },
   },
   exit: { opacity: 0, y: -10 },
};

export const searchPageVarients = {
   inital: {
      opacity: 0,
      y: "200vh",
   },
   animate: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.5,
         type: "tween",
      },
   },
   exit: {
      transition: {
         duration: 0.5,
         type: "tween",
      },
      y: "200vh",
   },
};

export const TabVariants = {
   inital: {
      x: -50,
      originX: 0,
   },
   animate: {
      x: 0,
      transition: {},
   },
   exit: {
      transition: {},
      x: -50,
      opacity: 0,
      originX: 0,
   },
};

export const TabPageChangeVariants = {
   inital: {
      x: "-100vw",
      opacity: 0,
   },
   animate: {
      x: 0,
      transition: {
         duration: 0.5,
      },
      opacity: 1,
   },
   exit: {
      transition: {
         duration: 0.3,
      },
      x: "100vw",
      opacity: 0,
   },
};

export const ChangeAddressVariants = {
   inital: {
      y: "-50px",
      opacity: 0,
   },
   animate: {
      y: 0,
      transition: {
         duration: 0.5,
      },
      opacity: 1,
   },
   exit: {
      transition: {
         duration: 0.3,
      },
      y: "-50px",
      opacity: 0,
   },
};
