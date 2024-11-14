import React from "react";

const MouseScrollAnimatiion = () => {
  return (
    <div className="absolute bottom-4 left-[50%] translate-x-[-50%] animate-bounce">
      <video className="h-12 w-12" loop muted autoPlay>
        <source src="/mouse_Animation.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default MouseScrollAnimatiion;
