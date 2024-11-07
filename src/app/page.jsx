"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/aku.jpg" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Hai !!
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Saya Lahir di Sumedang pada tanggal 15 Oktober 2003, Saya adalah
          Mahasiswa tingkat 5 di Universitas Ma'soem.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <a href="/hobbies">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Hobbies
              </button>
            </a>
            <a href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
