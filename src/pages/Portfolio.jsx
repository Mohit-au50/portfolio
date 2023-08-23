import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.svg";
import link from "../assets/link.svg";

const Projects = [
  {
    projectName: "Multiuser Blog",
    description:
      "Experience the Power of Collaboration: A Multiuser Blog PlatformBuilt with MERN Stack - Share and Discover Unique Perspectives,Engage in Discussions, and Build a Community through Interactive Blogging.",
    githubLink: "",
    hostedLink: "",
  },
  {
    projectName: "User Auth",
    description:
      "Secure Access Made Simple: A User Authentication App Powered by MERN Stack - Safeguard Your Data and Control User Permissions with a Robust and Hassle-Free Authentication Solution.",
    githubLink: "",
    hostedLink: "",
  },
  {
    projectName: "CRUD App",
    description:
      "A crud application website made with MERN Stack for Efficient Data Management. Seamlessly Create, Read, Update, and Delete Data with Ease.",
    githubLink: "",
    hostedLink: "",
  },
  {
    projectName: "AttainU Clone",
    description:
      "With a focus on simplicity and design, created a clone of the AttainU website with the help of Node, Express, MongoDB. Used ejs template engine to render user info dynamically from the database into the website",
    githubLink: "https://github.com/Mohit-au50/backend-project",
    hostedLink: "https://backend-project-zvav.onrender.com",
  },
];

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center pt-24 pb-9 lg:pt-32">
          <span className="font-semibold block my-5">Portfolio</span>
          <h1 className="text-3xl lg:text-5xl font-bold my-5 text-center lg:text-start break-words">
            Selected projects
          </h1>
          {Projects &&
            Projects.map((project, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center bg-white shadow-2xl pb-4 my-12 lg:pb-0 lg:flex-row sm:w-[70%]"
              >
                <div
                  className={`h-56 w-full lg:h-[60vh] lg:basis-2/3
                  ${
                    index % 2 == 0
                      ? "lg:order-2 bg-violet-400"
                      : "bg-orange-400"
                  }`}
                >
                  {/* <img src={profile} alt="" className="w-full h-[60vh]" /> */}
                </div>

                <div className="flex flex-col text-center px-5 lg:basis-1/2 lg:px-5 lg:py-9">
                  <h2 className="text-2xl font-bold my-5 lg:text-3xl lg:my-7">
                    {project.projectName}
                  </h2>
                  <p className="text-gray-600 my-5">{project.description}</p>
                  <div className="flex justify-center gap-x-4 lg:gap-x-9 my-5">
                    <Link
                      to={project.githubLink}
                      className="flex gap-2 items-center font-semibold"
                    >
                      Code <img src={github} alt="" className="w-7 h-7" />
                    </Link>
                    <Link
                      to={project.hostedLink}
                      className="flex gap-2 items-center font-semibold"
                    >
                      Demo <img src={link} alt="" className="w-7 h-7" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
