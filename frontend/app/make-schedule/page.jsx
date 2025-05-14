'use client';
import React from 'react';
import ScheduleForm from './Components/scheduleform';

const MakeSchedulePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glassy Form Container */}
      <div className="flex justify-center items-center h-full relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/30 max-w-md w-full">
          <ScheduleForm />
        </div>
      </div>
    </div>
  );
};

export default MakeSchedulePage;
