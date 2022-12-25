import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import profile from "./Images/profile.png";

type Props = {};

export default function Hero({}: Props) {
  // You could try teaching this.
  const [text, count] = useTypewriter({
    words: ["नमस्ते", "Abhishek Raj Poudel", "Loves to Code"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col  items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* Use Image component form nextjs */}
      <Image
        className="rounded-full h-56 w-40 mx-auto object-cover mb-[32px] "
        alt="Profile Image"
        src={profile}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500  pb-2 tracking-[10px]">
          Web Developer
        </h2>
        <h1 className="text-5xl pt-4 lg:text-6xl font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className=" flex justify-center gap-2 pt-5">
          {/* this #about #experienge etc will help us directly scroll to that place of our page. */}
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
