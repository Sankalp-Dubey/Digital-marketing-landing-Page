import React from "react";
import { SectionContainer } from "../layout.component";
import { SectionSubTitle, SectionTitle } from "../typography.component";
import Image from "next/image";

function Solution({ className }) {
  return (
    <section className=" mt-6 mb-6 w-full">
      <div className=" container m-auto" >
        <div className="text-center font-bold text-3xl  container">
          <span>
            How do we apply a <span className="font-[800] text-[#f57E32]">Ready-Made</span>{" "}
            solution?
          </span>
        </div>

      <div className=" w-full container  flex justify-center flex-col">
      <div className=" w-full mt-9 px-5 flex flex-col md:flex-row justify-center ">
          <div className=" w-full md:w-1/4 mt-3 flex flex-col  items-center text-center">
            <div >
              <img src="/icons/Solution1.png" alt="img" height={50} width={50}></img>
            </div>
            <div>
              <h1 className=" font-bold">Consulting</h1>
              <p className=" ">Choosing the best solution for your buisness</p>
            </div>
          </div>

          <div className="  w-full md:w-1/4 mt-3  flex flex-col  items-center text-center">
            <div>
              <img src="/icons/Solution2.png" alt="img" height={50} width={50}></img>
            </div>
            <div>
              <h1 className=" font-bold">Estimate</h1>
              <p className=" ">Counting cost and time efforts.</p>
            </div>
          </div>

          <div className="  w-full md:w-1/4  mt-3 flex flex-col  items-center text-center">
            <div>
              <img src="/icons/Solution3.png" alt="img" height={50} width={50}></img>
            </div>
            <div>
              <h1 className=" font-bold">Development</h1>
              <p className=" ">Project Development based on modules.</p>
            </div>
          </div>

          <div className="  w-full md:w-1/4  mt-3 flex flex-col  items-center text-center">
            <div>
              <img src="/icons/Solution4.png" alt="img" height={50} width={50}></img>
            </div>
            <div>
              <h1 className=" font-bold">Equipment</h1>
              <p className=" ">Assistance with choosing and integrating equipment</p>
            </div>
          </div>
        </div>

        <div className="  w-full  mt-1 px-5 flex flex-col md:flex-row  justify-center">
          <div className="  w-full md:w-1/4  mt-3 flex flex-col  items-center text-center">
            <div>
              <img src="/icons/Solution5.png" alt="img" height={50} width={50}></img>
            </div>
            <div>
              <h1 className=" font-bold">Support</h1>
              <p className=" ">Curther technical and buisness support</p>
            </div>
          </div>

          <div className="  w-full md:w-1/4  mt-3 flex flex-col  items-center text-center">
            <div>
              <img src="/icons/Solution6.png" alt="img" height={50} width={50}></img>
            </div>
            <div>
              <h1 className=" font-bold">Launch</h1>
              <p className="">product launch</p>
            </div>
          </div>

          <div className="   w-full md:w-1/4 mt-3 flex flex-col  items-center text-center">
            <div>
              <img src="/icons/Solution7.png" alt="img" height={50} width={50}></img>
            </div>
            <div>
              <h1 className=" font-bold">Training</h1>
              <p className=" ">Staff training on how to use system</p>
            </div>
          </div>

          <div className="  w-full md:w-1/4  flex flex-col justify-center items-center text-center">
          <div  style={{backgroundColor: "#c74efa"}} className=" text-xl p-4 text-white h-[200px] w-[250px] mt-[40px]">
            <h1>Finally you will get 100% working ready-made modules configured to your system, tested and ready to work</h1>
          </div>
          </div>
        </div>
      </div>
       
      </div>
    </section>
  );
}

export default Solution;
