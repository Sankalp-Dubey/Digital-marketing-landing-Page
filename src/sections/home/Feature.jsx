"use client";
import "../../styles/feature.css"

// =================== Tools Technologies =========================== //
const softwares = [
  {
    id: 1,
    title: "Branding Consultancy",
    icon: "/icons/erp.png",
    ans: "Top notch digital branding agency in Lucknow that designs a customized brand strategy hand crafted for…",
  },
  {
    id: 2,
    title: "Digital Marketing",
    icon: "/icons/crm.png",
    ans: "Digital marketing company in Lucknow that provides top class internet marketing services delivered by certified online…",
  },
  {
    id: 3,
    title: "Lead Generation",
    icon: "/icons/lws.png",
    ans: "Sky rocket your sales and profits with our high quality leads generation process through reliable, tested…",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    icon: "/icons/market.png",
    ans: "Trusted Social Media Agency that creates a buzz & gets you more likes, leads, & reach",
  },
  {
    id: 5,
    title: "Search Engine Optimization",
    icon: "/icons/food.png",
    ans: "Best in class SEO services to rank your website on top of the search engine results",
  },
  {
    id: 6,
    title: "Pay Per Click Advertising",
    icon: "/icons/service.png",
    ans: "Google Partner PPC Company providing the best Google Ads campaign management services",
  },

];
export default function Feature() {
  return (
    <div  style={{backgroundColor:"#F7F9F8"}} className="w-full  ">
       <div className=" container m-auto p-6">
        <div className=" text-center  pt-5">
          <p style={{color:"#6EC1E4"}} className=" text-xl font-bold ">Know more about our</p>
          <h1 style={{color:"#57007F"}} className=" mt-4 text-3xl font-bold">Digital Marketing Services</h1>
        </div>

        <div>
        <div   className="h-full md:py-0 py-5 overflow-y-hidden w-full   ">
            <div className=" h-full flex flex-col md:flex-row font-medium mt-3 w-full flex-wrap justify-center ">
              {softwares.map((card) => (
                <div className=" cardli w-1/3 p-6 mx-4" key={card.id}>
                  <div className=" flex  bg-white rounded-2xl flex-col justify-center items-center p-5">
                  <div  style={{backgroundColor:"#7F3AC5"}} className=" h-[200px] w-[200px] rounded-full my-4 p-6">
                   <img className=" " src={card.icon}  alt="icons" height="30" width="30" />
                   </div>
                    <h1 className="ml-3 py-6 text-3xl font-bold text-center">{card.title}</h1>
                    <span className="ml-3 px-6 text-center">{card.ans}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       </div>
    </div>
   
  );
}
