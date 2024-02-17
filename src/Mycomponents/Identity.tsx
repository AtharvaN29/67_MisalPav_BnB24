// Identity.tsx
import React from 'react';
import "@/Mycomponents/Identity.css"

export function Identity() {
  return (
    <div className="identity-card flex bg-gradient-to-r from-cyan-400 via-emerald-400 to-green-400 border-rounded p-6 items-center justify-between w-10xl h-10xl mx-auto my-auto">
      <div className="identity-card-content text-white ml-20 mt-1">
        <p className="text-2xl font-bold text-left p-2">Name: name here</p>
        <p className="text-2xl font-bold text-left p-2">User ID: id here</p>
        <p className="text-2xl font-bold text-left p-2">User ID: id here</p>
      </div>
      <div className="user-icon avatar placeholder w-20xl"> {/* daisyui placeholder  */}
        <div className="bg-white text-neutral-content rounded-full w-30xl mr-20">
          <span className="text-9xl">D</span>
        </div>
      </div>
    </div>
  );
}
