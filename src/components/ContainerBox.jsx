import React from "react";

const ContainerBox = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen z-10">
      <div className="w-[90%] md:w-[70%]  h-[500px] sm:h-[500px] lg:h-[600px] glassmorphism rounded-3xl shadow-lg">
      {children}
      </div>
    </div>
          
  );
};

export default ContainerBox;



// import React from "react";

// const ContainerBox = ({ children }) => {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="relative w-[90%] md:w-[80%] h-[500px] sm:h-[500px] lg:h-[600px] rounded-3xl shadow-lg">
//         {/* Apply the glass effect only to the background */}
//         <div className="absolute inset-0 backdrop-blur-md bg-white/10 rounded-3xl z-0"></div>
//         {/* Content area */}
//         <div className="relative z-10">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default ContainerBox;

