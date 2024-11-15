import React from "react";

const MouseScrollAnimatiion = () => {
  return (
    <div className="absolute w-full bottom-4 flex justify-center animate-bounce">
      <video className="h-12 w-12" loop muted autoPlay>
        <source src="/mouse_Animation.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default MouseScrollAnimatiion;
