import Image from "next/image";
import React from "react";
import netflix from "./Images/Netflix.png";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { url } from "inspector";
type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="section text-left max-w-full justify-evenly z-0"
    >
      <h3 className="sectionTitle">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll ovwerflow-y-hidden snap-x snap-mandatory z-20 customScrollbar ">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col spac-y-5 items-center justify-center p-20 md:p-44 "
          >
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {project.image && (
                <img src={urlFor(project.image).url()} alt="showcase Image" />
              )}
            </motion.div>
            <div className="space-y-10 px-0 md:p-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F8C77E]/50 ">
                  Case Study {i + 1} of {projects.length} :
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center gap-4 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-10 "
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F8C77E]/20 left-0 h-[400px] skew-y-12 " />
    </motion.div>
  );
}
