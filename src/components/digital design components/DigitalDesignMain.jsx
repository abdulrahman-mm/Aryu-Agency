import sample11111 from "../../assets/sample11111.png";


const DigitalDesignMain = () => {

     let cardData = [
          {
            cardTitle: "Social Media Posts",
            cardDescription:
              "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
            cardImage: sample11111,
          },
          {
            cardTitle: "Web Banners",
            cardDescription:
              "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
            cardImage: sample11111,
          },
          {
            cardTitle: "Google Ads Design",
            cardDescription:
              "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
            cardImage: sample11111,
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
           className={`bb flex ${index % 2 === 0 ? "" : "flex-row-reverse"} justify-between`}
         >
           <div className="basis-[30%] flex flex-col justify-center gap-10 items-start">
             <p className="text-6xl ">{item.cardTitle}</p>
             <p className="text-xl text-gray-600">{item.cardDescription}</p>

             <button className="px-8 py-3 border-2 text-gray-500 rounded-full text-xl border-gray-500">
               Find out more
             </button>
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