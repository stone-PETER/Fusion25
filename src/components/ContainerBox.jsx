import React from "react";

const ContainerBox = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[90%] md:w-[70%]  h-[500px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-white/30 rounded-3xl shadow-lg backdrop-blur-md">
      {children}
      </div>
    </div>
          
  );
};

export default ContainerBox;