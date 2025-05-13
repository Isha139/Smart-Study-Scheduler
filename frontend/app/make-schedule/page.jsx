import React from "react";
import Link from "next/link";  
import ScheduleForm from "./Components/scheduleform";

export default function MakeSchedulePage() {
  return (
    <>
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <nav className="bg-blue-950 p-4 text-white z-30 relative">
          <Link href="/" className="mr-4">Home</Link>
        </nav>

        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg z-30">
            <h1 className="text-xl font-bold text-black mb-4 text-center">Schedule Your Time</h1>
            <ScheduleForm />
          </div>
        </div>
      </div>
    </>
  );
}
