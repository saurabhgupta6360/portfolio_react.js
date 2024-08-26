import React from "react";
import { ReactTyped } from "react-typed";
import { MdOutlineDesignServices, MdOutlineColorLens } from "react-icons/md";
import { PiBookOpenText, PiPhoneCall, PiPenNib } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { FaBullhorn, FaPaintBrush } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";
import taramandal from "../components/images/taramandal.jpg";
import ftm from "../components/images/ftm.jpg";
import tmdental from "../components/images/tmdental.jpg";
import laserskincentre from "../components/images/laserskincentre.jpg";
import bondcleaning from "../components/images/bondcleaning.jpg";
import canada from "../components/images/canada.jpg";

const Home = () => {
  return (
    <>
      <div className="por-hero-screen" id="home">
        <div className="container mx-auto z-50 relative pt-[16rem] xl:pt-[16rem] lg:pt-[8rem] md:pt-[10rem] xs:pt-[6rem] xs:z-auto">
          <h3 className="title text-drakblue lg:text-2xl xs:text-[25px] font-semibold ">
            Hey there!
          </h3>
          <div className="subtile font-secondary lg:text-6xl font-semibold lg:leading-none lg:my-5 xs:[font-size:52px] xs:[line-height:1] xs:my-2 ">
            I’m Saurabh,
            <p class="break-words">
              Independent
              <ReactTyped
                className=" text-drakblue lg:pl-3"
                strings={[" Developer ", " Designer ", " Professional "]}
                typeSpeed={40}
                loop={"ture"}
                backSpeed={30}
              />
            </p>
            Based in India.
          </div>
          <p className="text-section primary lg:font-light lg:text-base xs:[font-size:12px] xs:font-normal">
            I design with a <span className=" text-drakblue">purpose</span>,
            viewing digital a single piece of a larger picture.
            <br /> Escalate effective products through{" "}
            <span className=" text-drakblue pl-1">
              design and creative strategy.
            </span>
            {/* <p class="break-words">
              Escalate effective products through
              <span className=" text-drakblue pl-1">
                design and creative strategy.
              </span>
            </p> */}
          </p>
          <button class="rounded-full text-drakblue font-secondary font-bold border border-blue-700 border-solid p-3 text-sm px-7 my-5 hover:bg-blue-700 hover:text-white">
            Download CV
          </button>
        </div>
        {/* end banner */}
      </div>

      <div className=" flex-wrap items-center mx-auto max-w-screen-xl lg:relative md:relative ">
        <div className="container mx-auto md:relative">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-[1px] lg:absolute bottom-[0px] xl:bottom-[32px] md:absolute">
            <div className="bg-[#174ee2]">
              <div className=" text-center bg-drakblue text-white lg:px-24 lg:pb-11 lg:pt-16 sm:px-8 xs:pt-8 xs:px-9 xs:pb-11 ">
                <div className="icon-wrap">
                  <MdOutlineDesignServices className=" fill-white text-5xl text-center m-auto"></MdOutlineDesignServices>
                </div>
                <div className="wrap h-8">
                  <h3 className="text-white font-medium text-xl">
                    6+ Years Of Experience
                  </h3>
                </div>
                <p class=" text-white xs:text-sm ">
                  Capitalize on low hanging fruit to identify a ballpark added
                  activity to beta test.
                </p>
              </div>
            </div>
            <div className="bg-[#444444]">
              {" "}
              <div className="text-center bg-bgblack text-white lg:px-24 lg:pb-11 lg:pt-16 sm:px-8 xs:pt-8 xs:px-9 xs:pb-11">
                <div className="icon-wrap">
                  <PiBookOpenText className=" fill-white text-5xl text-center m-auto"></PiBookOpenText>
                </div>
                <div className="wrap h-8">
                  <h3 className="text-white font-medium text-xl">
                    15+ Completed Project
                  </h3>
                </div>
                <div className="text-white xs:text-sm ">
                  Podcasting operational change management inside of flows to
                  establish a framework.
                </div>
              </div>
            </div>
            <div className="bg-[#444444]">
              {" "}
              <div className=" text-center bg-bgblack text-white lg:px-24 lg:pb-11 lg:pt-16 sm:px-8 xs:pt-8 xs:px-9 xs:pb-11">
                <div className="icon-wrap">
                  <PiPhoneCall className=" fill-white text-5xl text-center m-auto"></PiPhoneCall>
                </div>
                <div className="wrap h-8">
                  <h3 className="text-white font-medium text-xl">
                    Online 24/7
                  </h3>
                </div>
                <p class="text-white sm:text-sm xs:text-sm">
                  Collaboratively administrate empowered markets via
                  plug-and-play networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class=" dark:bg-gray-900 bg-bglight relative z-auto xl:bottom-[30px]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-xl mb-8 lg:mb-16">
            <p className=" text-center px-2 m-auto text-drakblue text-base uppercase tracking-wide ">
              WHAT I DO
            </p>
            <h2 class=" text-4xl font-secondary text-center font-medium">
              I Provide Wide Range Of Digital Services
            </h2>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="text-center">
              <div className="icon-wrap">
                <MdOutlineColorLens className=" fill-drakblue text-5xl text-center m-auto"></MdOutlineColorLens>
              </div>
              <h3 class="mb-2 text-xl font-normal dark:text-white mt-[0.5rem]">
                Marketing
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Plan it, create it, launch it. Collaborate seamlessly with all
                the organization and hit your marketing goals every month with
                our marketing plan.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-wrap">
                <RiComputerLine className=" fill-drakblue text-5xl text-center m-auto"></RiComputerLine>
              </div>
              <h3 class="mb-2 text-xl font-normal dark:text-white mt-[0.5rem]">
                Legal
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Protect your organization, devices and stay compliant with our
                structured workflows and custom permissions made for you.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-wrap">
                <PiPenNib className=" fill-drakblue text-5xl text-center m-auto"></PiPenNib>
              </div>
              <h3 class="mb-2 text-xl font-normal dark:text-white mt-[0.5rem]">
                Business Automation
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Auto-assign tasks, send Slack messages, and much more. Now power
                up with hundreds of new templates to help you get started.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-wrap">
                <FaPaintBrush className=" fill-drakblue text-5xl text-center m-auto"></FaPaintBrush>
              </div>
              <h3 class="mb-2 text-xl font-normal dark:text-white mt-[0.5rem]">
                Finance
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Audit-proof software built for critical financial operations
                like month-end close and quarterly budgeting.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-wrap">
                <BsGraphUpArrow className=" fill-drakblue text-5xl text-center m-auto"></BsGraphUpArrow>
              </div>
              <h3 class="mb-2 text-xl font-normal dark:text-white mt-[0.5rem]">
                Enterprise Design
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Craft beautiful, delightful experiences for both marketing and
                product with real cross-company collaboration.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-wrap">
                <FaBullhorn className=" fill-drakblue text-5xl text-center m-auto"></FaBullhorn>
              </div>
              <h3 class="mb-2 text-xl font-normal dark:text-white mt-[0.5rem]">
                Operations
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Keep your company’s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* skills */}

      <section className="pt-[5rem]" id="skills">
        <div className="container mx-auto">
          <div className="text-center px-2 m-auto text-drakblue text-base uppercase tracking-wide">
            My Skills
          </div>

          <div class=" text-4xl font-secondary text-center font-medium pt-2">
            I Develop Skills Regularly
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-8 ">
            <div className=" block">
              <div className="contents float-left font-medium ">Web Design</div>
              <ProgressBar
                completed={80}
                bgColor="#174ee2"
                height="14px"
                label="20px"
                animateOnRender={true}
              />
            </div>

            <div className=" block">
              <div className="contents float-left font-medium ">HTML/CSS</div>
              <ProgressBar
                completed={80}
                bgColor="#174ee2"
                height="14px"
                label="20px"
                animateOnRender={true}
              />
            </div>

            <div className=" block">
              <div className="contents float-left font-medium ">JavaScript</div>
              <ProgressBar
                completed={50}
                bgColor="#174ee2"
                height="14px"
                label="20px"
                animateOnRender={true}
              />
            </div>

            <div className=" block">
              <div className="contents float-left font-medium ">React JS</div>
              <ProgressBar
                completed={50}
                bgColor="#174ee2"
                height="14px"
                label="20px"
                animateOnRender={true}
              />
            </div>

            <div className=" block">
              <div className="contents float-left font-medium ">Bootstrap</div>
              <ProgressBar
                completed={80}
                bgColor="#174ee2"
                height="14px"
                label="20px"
                animateOnRender={true}
              />
            </div>

            <div className=" block">
              <div className="contents float-left font-medium ">Wordpress</div>
              <ProgressBar
                completed={50}
                bgColor="#174ee2"
                height="14px"
                label="20px"
                animateOnRender={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* project */}

      <section className="py-24 bg-bglight mt-24 " id="projects">
        <div className="container mx-auto text-center">
          <div className="text-center px-2 m-auto text-drakblue text-base uppercase tracking-wide">
            Portfolio
          </div>
          <div class=" text-4xl font-secondary text-center font-medium pt-2">
            My Amazing Works
          </div>

          <div class="grid xs:grid-cols-1 lg:gap-4 gap-x-4 gap-y-5 sm:grid-cols-2  md:grid-cols-3 mt-20 ">
            <div className="relative max-w-lg overflow-hidden bg-cover bg-no-repeat">
              <a href="https://thetaramandal.com/" target="blank">
                <img
                  src={taramandal}
                  className="max-w-lg transition duration-300 ease-in-out hover:scale-110"
                  width="500"
                  height="368"
                  alt="taramandal"
                />
              </a>
            </div>

            <div className="relative max-w-lg overflow-hidden bg-cover bg-no-repeat">
              <a href="https://ftmforklifts.com.au/" target="blank">
                <img
                  src={ftm}
                  className="max-w-lg transition duration-300 ease-in-out hover:scale-110"
                  width="500"
                  height="368"
                  alt="ftm"
                />
              </a>
            </div>

            <div className="relative max-w-lg overflow-hidden bg-cover bg-no-repeat">
              <a
                href="https://www.tamborinemountaindental.com.au/"
                target="blank"
              >
                <img
                  src={tmdental}
                  className="max-w-lg transition duration-300 ease-in-out hover:scale-110"
                  width="500"
                  height="368"
                  alt="tamborinemountaindental"
                />
              </a>
            </div>

            <div className="relative max-w-lg overflow-hidden bg-cover bg-no-repeat">
              <a href="https://www.betterbondcleaning.com.au/" target="blank">
                <img
                  src={bondcleaning}
                  className="max-w-lg transition duration-300 ease-in-out hover:scale-110"
                  width="500"
                  height="368"
                  alt="bondcleaning"
                />
              </a>
            </div>

            <div className="relative max-w-lg overflow-hidden bg-cover bg-no-repeat">
              <a href="https://laserskincentre.com.au/" target="blank">
                <img
                  src={laserskincentre}
                  className="max-w-lg transition duration-300 ease-in-out hover:scale-110"
                  width="500"
                  height="368"
                  alt="laserskincentre"
                />
              </a>
            </div>
            <div className="relative max-w-lg overflow-hidden bg-cover bg-no-repeat">
              <a
                href="https://www.studyin-canada.com/landing/join-canada-universities/"
                target="blank"
              >
                <img
                  src={canada}
                  className="max-w-lg transition duration-300 ease-in-out hover:scale-110"
                  width="500"
                  height="368"
                  alt="canada"
                />
              </a>
            </div>
          </div>

          <button class="rounded-full text-drakblue font-secondary font-bold border border-blue-700 border-solid p-3 text-sm px-7 my-5 hover:bg-blue-700 hover:text-white mt-16">
            <a href="https://github.com/saurabhgupta6360" target="blank">
              {" "}
              More Projects
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
