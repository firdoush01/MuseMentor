"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div>
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Contact Us
      </h1>

      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        We are here to help with any questions about our courses, programs or
        events. Reach out and let us know how we can assist you in your musical
        journey.
      </p>

      <div className="flex flex-col justify-center items-center gap-4 mt-4">

            <div className="">
            <input className="h-16 w-80 text-gray-900 p-4 font-semibold rounded-lg outline-none" type="email" name="email" id="mail" placeholder="abc@gmail.com" />

            </div>

            <div>
            <input className="h-20 w-80 text-gray-900 p-4 font-semibold rounded-lg outline-none text-wrap" type="text" placeholder="write here" />

            </div>


        </div>

        </div>

        
      
    </div>
  );
}

export default page;
