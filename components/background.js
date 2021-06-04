import React from 'react';

export default function Background({children}) {


    return (
      <div className="relative items-center justify-center h-screen w-screen bg-fixed overflow-hidden">
        {children}
    <div className="video-wrapper">
<video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none"><source src="./background.mp4" type="video/mp4" /></video>
</div>
  </div>
  )
};
      