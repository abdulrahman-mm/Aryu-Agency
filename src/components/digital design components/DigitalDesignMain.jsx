import sample11111 from "../../assets/sample11111.svg";
import digitaldesign_webbanners from "../../assets/digitaldesign_webbanners.svg";
import digitaldesign_googleadsdesign from "../../assets/digitaldesign_googleadsdesign.svg";


const DigitalDesignMain = () => {

     let cardData = [
          {
            cardTitle: "Social Media Posts",
            cardDescription:
              "The brand steps into the social media spotlight. Each vibrant post captivates the audience, sparking engagement and conversation. As interactions grow, a community forms, transforming the brand from a name into a lively hub of connection and loyalty. That’s the magic of crafted content.",
            cardImage: sample11111,
          },
          {
            cardTitle: "Web Banners",
            cardDescription:
              "Web banners act as bold invitations for the brand. Striking designs capture attention and encourage clicks, leading visitors on a journey to uncover exciting offerings. Each banner creates a pathway for connection and discovery.",
            cardImage: digitaldesign_webbanners,
          },
          {
            cardTitle: "Google Ads Design",
            cardDescription:
              "Powerful Google Ads effectively broaden your reach. Each ad is designed to be attention-grabbing, encouraging customers to take action. When they search for solutions, the brand is right at their fingertips, transforming curiosity into meaningful connections that drive engagement and conversions. We deliver excellence every time.",
            cardImage: digitaldesign_googleadsdesign,
          },
        ];
  return (
     <section className="mt-32 px-20">
     <div className="flex items-center justify-between">
       <p className="text-6xl basis-[35%] font-semibold">The Art of Bold Disruption</p>

       <p className="basis-[32%] text-gray-600 text-lg">
         Your vision deserves to be heard. We amplify your ideas with creative
         flair, turning them into a brand voice that commands attention.
       </p>
     </div>

     <div className=" flex flex-col gap-5 mt-36">
       {cardData.map((item, index) => (
         <div
         className={` bg-white rounded-3xl gap-5 items-center my-8 px-10 py-10 flex ${
          index % 2 === 0 ? "" : "flex-row-reverse"
        } h-[90vh] justify-between`}
         >
           <div className="basis-[30%] flex flex-col justify-center gap-10 items-start">
             <p className="text-5xl font-opensans font-semibold text-black ">{item.cardTitle}</p>
             <p className="text-xl font-poppins  text-gray-500">{item.cardDescription}</p>

             {/* <button className="px-8 py-3 border-2 text-gray-500 rounded-full text-xl border-gray-500">
               Find out more
             </button> */}
           </div>

           <img
             src={item.cardImage}
             alt=""
             className="basis-[50%] object-cover"
           />
         </div>
       ))}
     </div>
   </section>
  )
}

export default DigitalDesignMain