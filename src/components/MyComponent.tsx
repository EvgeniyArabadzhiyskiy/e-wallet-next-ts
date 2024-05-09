"use client";
import { AnimatePresence,  motion, stagger, useAnimate, usePresence , AnimationPlaybackControls, useAnimation, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

const Component = ({ children }: PropsWithChildren) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export const Component1 = ({
  children,
  keyName,
}: {
  children?: ReactNode;
  keyName: string;
}) => {
  console.log("Component1  keyName:", keyName);
  return (
    <>
      <motion.div
        key="sssss"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div style={{ width: 400, height: 300, background: "green" }}></div>
      </motion.div>
    </>
  );
};

export const Component2 = ({
  children,
  childrenKey,
}: {
  children?: ReactNode;
  childrenKey?: string;
}) => {
  const randomKey = Math.random().toString();
  // console.log("randomKey:", randomKey);

  // useEffect(() => {
  //   console.log("Mount");

  //   return () => {
  //     console.log("Unmount");
  //   };
  // });
  return (
    <AnimatePresence>
      <motion.div
        key={childrenKey}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        exit={{ x: 100 }}
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    x: 0,
    // transition: { type: "spring", stiffness: 300, damping: 24 }
    transition: { duration: 2}
  },
  closed: { 
    opacity: 0.5, 
    x: 200, 
    transition: { duration: 2 } 
  }
};

const MyComponent = ({ children, childrenKey }: any) => {
  // const [isVisible, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [controls, setControls] = useState<AnimationPlaybackControls>();

  // console.log("MyComponent  controls:", controls);
  const [scope, animate] = useAnimate();
  // const [isPresent, safeToRemove] = usePresence();

  // const controls =  animate([
  //   ["#boxs",{ opacity: [0, 1], x: ["-100%", "0%"], borderTopRightRadius: ["150px", "0px"], borderBottomRightRadius:["150px", "0px"], },{ duration: 4 } ],
  //   [".wwww", {  x: [0, 100], backgroundColor: "#b26464",  }, { duration: 4, delay: stagger(1) }],
  // ]);

  // useEffect(() => {
  
  //   console.log("Mount");

  //   !isPresent && safeToRemove()
    
  //   return () => {
  //     console.log("Unmount");
  //   }
  // })

  
  // useEffect(() => {
  //    if (isPresent) {
  //      const enterAnimation = async () => {
  //       // await animate("li", { opacity: 1, x: -100 })
  //       // const { pause, play } =  animate("li", { translate: "-100%",  opacity: 1,  },{ duration: 2 });

  //       // if (!isVisible) {
  //       //    pause();
  //       // }
        
  //       //  await animate("ul", { translate: "-100%", border: "10px solid #e9a11c" }, { duration: 2 });
  //       //  await animate( "ul",{  opacity: 0.5, x: 100, y: 200 },{ duration: 5, y: { duration: 12 }})

  //       // await animate([["ul", { opacity: [0, 1], translate: ["-100%", "0%"]  }, { duration: 2 }]]);

  //      const controls = animate([
  //         ["#boxs",{ opacity: [0, 1, 0, 1], x: ["-100%", "0%"], borderTopRightRadius: ["150px", "0px"], borderBottomRightRadius:["150px", "0px"], },{ duration: 2 } ],
  //         [".wwww", {  x: [0, 100, 0], backgroundColor: "#b26464",  }, { duration: 4, delay: stagger(1) }],
  //       ]);


  //       // controls?.pause();
  //       // controls?.play();

  //       setControls(controls);

      
  //       // animate([["#transition-element", { x: ["-100%", "0%"] }, { duration: 4 }]]);

  //      }
  //     //  enterAnimation()

  //    } 

  //    else {
  //      const exitAnimation = async () => {
  //       // await animate("li", { translate: "100%",  opacity: 1,  },{ duration: 2 });
  //       //  await animate("li", { opacity: 0, x: 0 })
  //       //  await animate(scope.current, { opacity: 0 })
  //       // await animate("ul", { translate: "0%", border: "10px solid #301ce9" }, { duration: 2 });
  //        safeToRemove()
  //      }
       
  //     //  exitAnimation()
  //    }

   
  // },[isPresent])

 
  return (
    <>
      <>
      {/* <button onClick={() => {
        controls?.cancel();
      }}>Cancel</button> */}

      <button onClick={() => {
        controls?.play();
      }}>Play</button>

      <button onClick={() => {
        controls?.pause();
      }}>Pause</button>


      <button onClick={() => setIsOpen(!isOpen)}>OPEN</button>

        <div ref={scope} >
     
        {/* <button onClick={() => {
            // animate(".wwww", { background: "green" }, { duration: 2 })
            // .then(() => {
            //   router.push('/')
            //   console.log("DDDDDDDDDDDDDDDDDDD");
              
            // })
          }}>ANIME</button> */}

          {/* <div className="wwww" style={{width: 400, height: 300, background: "orange"}}></div> */}

        <ul
          id="boxs"  
          style={{ border: "10px solid #1c1ce9",  padding: 20, background: "green"}}

          // animate={{opacity: [0, 1]}}
          // transition={{duration: 2}}

          // animate={isOpen ? "open" : "closed"}
          // exit={{x: "-100%"}}
       
        >

          <motion.li variants={itemVariants} className="wwww" style={{width: 400, height: 50, marginBottom: 20, background: "orange"}}></motion.li>
          <motion.li variants={itemVariants} className="wwww" style={{width: 400, height: 50,marginBottom: 20, background: "orange"}}></motion.li>
          <motion.li variants={itemVariants} className="wwww" style={{width: 400, height: 50,marginBottom: 20, background: "orange"}}></motion.li>
        </ul>

      {/* { children } */}

      {/* <li className="wwww" style={{width: 400, height: 50, marginBottom: 20, background: "orange"}}></li> */}
      
      </div>
      </>
    </>
  );

   
};

// function MyComponent() {
//   const [isPresent, safeToRemove] = usePresence()
//   // console.log("MyComponent  isPresent:", isPresent);
//   const [scope, animate] = useAnimate()
  
//   useEffect(() => {
//      if (isPresent) {
//        const enterAnimation = async () => {
//          await animate("li", { translate: "-100%",  opacity: 1,  },{ duration: 2 });
//          await animate("ul", { translate: "-100%", border: "10px solid #e9a11c" }, { duration: 2 })
//        }
//        enterAnimation()

//      } 
//     //  else {
//     //    const exitAnimation = async () => {
//     //      await animate("li", { opacity: 0, x: -100 })
//     //      await animate(scope.current, { opacity: 0 })
//     //      safeToRemove()
//     //    }
       
//     //    exitAnimation()
//     //  }
//   }, [isPresent])
  
//   return (
//     <div ref={scope}>
//     <ul  style={{ border: "10px solid #1c1ce9",  padding: 20, background: "green"}}>
//       <li className="wwww" style={{width: 400, height: 50, marginBottom: 20, background: "orange"}}></li>
//       <li className="wwww" style={{width: 400, height: 50,marginBottom: 20, background: "orange"}}></li>
//       <li className="wwww" style={{width: 400, height: 50,marginBottom: 20, background: "orange"}}></li>
//     </ul>
//     </div>
//   ) 
// }

export default MyComponent;
