import sample11111 from "../../assets/sample11111.svg";
import digitaldesign_webbanners from "../../assets/digitaldesign_webbanners.svg";
import digitaldesign_googleadsdesign from "../../assets/digitaldesign_googleadsdesign.svg";


const DigitalDesignMain = () => {

     let cardData = [
          {
            cardTitle: "Social Media Posts",
            cardDescription:
              "Social media brings your brand to the spotlight with vibrant posts that spark engagement. As conversations grow, a community forms, turning your brand from a name into a hub of connection and loyalty. This is the power of crafted content.",
            cardImage: sample11111,
          },
          {
            cardTitle: "Web Banners",
            cardDescription:
              "Web banners act as bold invitations for your brand. Striking designs capture attention and encourage clicks, leading visitors on a journey to uncover exciting offerings. Therefore, each banner creates a pathway for connection and discovery through creative design.",
            cardImage: digitaldesign_webbanners,
          },
          {
            cardTitle: "Google Ads Design",
            cardDescription:
              "Google Ads expand your reach with attention-grabbing designs that encourage customer action. When solutions are searched, your brand is right there, transforming curiosity into valuable connections. Consequently, we deliver excellence every time, driving engagement and conversions with impactful ads.",
            cardImage: digitaldesign_googleadsdesign,
          },
        ];
  return (
     <section className="mt-32 px-5 py-5 md:px-14 md:py-14  lg:px-20 lg:py-20">
     <div className="flex items-center gap-5 flex-wrap justify-between">
       <p className="text-3xl md:text-6xl  md:basis-[35%] font-sans font-semibold">The Art of Bold Disruption</p>

       <p className="md:basis-[32%] text-gray-600 text-lg">
         Your vision deserves to be heard. We amplify your ideas with creative
         flair, turning them into a brand voice that commands attention.
       </p>
     </div>

     <div className="flex flex-col justify-center items-center gap-10 mt-16 lg:mt-36">
       {cardData.map((item, index) => (
         <div
         className={` bg-white rounded-3xl gap-5 md:gap-10  flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } h-auto lg:h-[90vh] items-center`}
         >
           <div className="basis-[100%] md:basis-[50%] flex flex-col gap-3 md:gap-8 items-start md:text-left">
             <p className="text-lg md:text-2xl lg:text-4xl font-opensans font-semibold text-black">{item.cardTitle}</p>
             <p className="text-sm md:text-lg font-poppins text-gray-500">{item.cardDescription}</p>

             {/* <button className="px-8 py-3 border-2 text-gray-500 rounded-full text-xl border-gray-500">
               Find out more
             </button> */}
           </div>

           <img
             src={item.cardImage}
             alt=""
             className="w-full  md:w-1/2 lg:basis-[40%] object-cover rounded-2xl"
           />
         </div>
       ))}
     </div>
   </section>
  )
}

export default DigitalDesignMain