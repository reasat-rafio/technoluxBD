export const sideBarVarients = {
   inital: {
      opacity: 0,
      x: 500,
   },
   animate: {
      opacity: 1,
      x: 0,
      transition: {
         type: "tween",
      },
   },
   exit: {
      opacity: 0,
      x: 500,
      transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
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
